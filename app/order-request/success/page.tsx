import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import ClearCartOnSuccess from "@/components/ClearCartOnSuccess";

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let paid = false;
  let email: string | null = null;
  let error: string | null = null;

  if (!session_id) {
    error = "Missing checkout session.";
  } else {
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(session_id);
      paid = session.payment_status === "paid";
      email = session.customer_details?.email ?? session.customer_email ?? null;
      if (!paid) error = `Payment status: ${session.payment_status}`;
    } catch (err) {
      error = err instanceof Error ? err.message : "Could not verify payment.";
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      {paid ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8">
          <ClearCartOnSuccess />
          <h1 className="text-xl font-semibold text-emerald-800">Payment received</h1>
          <p className="mt-3 text-sm text-emerald-700">
            {email
              ? `A receipt has been sent to ${email}. `
              : "A receipt has been emailed to you. "}
            Our team will confirm lot availability and coordinate shipment to your
            verified institutional address.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-blue-900 px-4 py-2 font-medium text-white hover:bg-blue-800"
          >
            Continue browsing
          </Link>
        </div>
      ) : (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8">
          <h1 className="text-xl font-semibold text-red-800">
            We couldn&apos;t confirm this payment
          </h1>
          <p className="mt-3 text-sm text-red-700">{error}</p>
          <Link
            href="/order-request"
            className="mt-6 inline-block rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:border-gray-400"
          >
            Back to order request
          </Link>
        </div>
      )}
    </div>
  );
}
