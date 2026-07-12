import Stripe from "stripe";

let stripeClient: Stripe | null = null;

// Lazily constructed so the app can boot (and pages that don't need Stripe
// can render) even before STRIPE_SECRET_KEY is configured.
export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env.local (see .env.local.example)."
    );
  }
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return stripeClient;
}
