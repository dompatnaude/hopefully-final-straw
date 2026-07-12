import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

type CheckoutRequestItem = {
  slug: string;
  sizeMg: number;
  quantity: number;
};

export async function POST(req: NextRequest) {
  let body: { items?: CheckoutRequestItem[]; institutionalEmail?: string; verified?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // NOTE: account verification currently lives only in browser localStorage
  // (see lib/auth-context.tsx) — there is no real backend yet. This flag is
  // trusted from the client for now, which is fine for a demo but MUST be
  // replaced with a real server-side session/verification check before this
  // goes live, otherwise anyone who can call this API directly could pay
  // without ever being verified.
  if (!body.verified) {
    return NextResponse.json(
      { error: "Only verified institutional accounts can check out." },
      { status: 403 }
    );
  }

  if (!body.items || body.items.length === 0) {
    return NextResponse.json({ error: "No items to check out." }, { status: 400 });
  }

  // Re-price every line item from the server-side catalog rather than
  // trusting client-supplied prices.
  const lineItems: Array<{
    price_data: {
      currency: string;
      product_data: { name: string; description: string };
      unit_amount: number;
    };
    quantity: number;
  }> = [];

  for (const item of body.items) {
    const product = getProductBySlug(item.slug);
    if (!product) {
      return NextResponse.json({ error: `Unknown product: ${item.slug}` }, { status: 400 });
    }
    const pack = product.packSizes.find((p) => p.sizeMg === item.sizeMg);
    if (!pack) {
      return NextResponse.json(
        { error: `Unknown pack size for ${product.name}: ${item.sizeMg}mg` },
        { status: 400 }
      );
    }
    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: `${product.name} (${pack.sizeMg} mg)`,
          description: `CAS ${product.casNumber} — Research Use Only`,
        },
        unit_amount: Math.round(pack.pricePerUnit * 100),
      },
      quantity: Math.max(1, item.quantity),
    });
  }

  const origin = req.nextUrl.origin;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      customer_email: body.institutionalEmail,
      success_url: `${origin}/order-request/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/order-request`,
      billing_address_collection: "required",
      custom_text: {
        submit: {
          message:
            "By completing this purchase you confirm these reagents are for laboratory research use only, by a verified institution, and will not be used for human or veterinary administration.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Stripe checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
