"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart-context";

export default function OrderRequestPage() {
  const { status, application } = useAuth();
  const { items, removeItem, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [notes, setNotes] = useState("");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const total = items.reduce((sum, i) => sum + i.pricePerUnit * i.quantity, 0);

  if (status !== "verified") {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Order requests</h1>
        <p className="mt-3 text-gray-600">
          Ordering is available to verified institutional accounts only.
        </p>
        <Link
          href="/account/register"
          className="mt-6 inline-block rounded-lg bg-blue-900 px-5 py-2.5 font-medium text-white hover:bg-blue-800"
        >
          Apply for access
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8">
          <h1 className="text-xl font-semibold text-emerald-800">Order request submitted</h1>
          <p className="mt-3 text-sm text-emerald-700">
            Our sales team will confirm lot availability and send an institutional
            invoice to {application?.institutionalEmail}. This is a request only —
            no payment has been processed.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-blue-900 px-4 py-2 font-medium text-white hover:bg-blue-800"
          >
            Continue browsing
          </Link>
        </div>
      </div>
    );
  }

  async function handlePayByCard() {
    setCheckoutError("");
    setCheckoutLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          verified: status === "verified",
          institutionalEmail: application?.institutionalEmail,
          items: items.map((i) => ({
            slug: i.slug,
            sizeMg: i.sizeMg,
            quantity: i.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Checkout failed.");
      }
      window.location.href = data.url;
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : "Checkout failed.");
      setCheckoutLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Order request</h1>
      <p className="mt-2 text-sm text-gray-600">
        Verified institutions can pay by card now or request a PO-backed
        institutional invoice.
      </p>

      {items.length === 0 ? (
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center text-gray-500">
          No items yet.{" "}
          <Link href="/products" className="text-blue-900 hover:underline">
            Browse the catalog
          </Link>{" "}
          to add reagents.
        </div>
      ) : (
        <>
          <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {items.map((item) => (
              <div key={`${item.slug}-${item.sizeMg}`} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-400">
                    {item.sizeMg} mg × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-700">
                    ${item.pricePerUnit * item.quantity}
                  </span>
                  <button
                    onClick={() => removeItem(item.slug, item.sizeMg)}
                    className="text-xs text-gray-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between text-sm">
            <span className="text-gray-500">Estimated total</span>
            <span className="font-semibold text-gray-900">${total}</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-blue-900/20 bg-blue-50 p-5">
              <h2 className="font-semibold text-gray-900">Pay by card now</h2>
              <p className="mt-1.5 text-xs text-blue-900/70">
                Charges your institution&apos;s card immediately via our payment
                processor. Fastest way to confirm an order.
              </p>
              <button
                onClick={handlePayByCard}
                disabled={checkoutLoading}
                className="mt-4 w-full rounded-lg bg-blue-900 px-4 py-2.5 font-medium text-white transition hover:bg-blue-800 disabled:opacity-60"
              >
                {checkoutLoading ? "Redirecting to checkout…" : "Pay by card"}
              </button>
              {checkoutError && (
                <p className="mt-2 text-xs text-red-600">{checkoutError}</p>
              )}
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="font-semibold text-gray-900">Request PO invoice</h2>
              <p className="mt-1.5 text-xs text-gray-500">
                Sends this order to our sales team for lot confirmation and
                net-30 institutional invoicing. No payment collected now.
              </p>
              <label className="mt-4 block">
                <span className="text-xs font-medium text-gray-700">
                  Notes for our sales team (optional)
                </span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="input mt-1.5 min-h-16 text-xs"
                  placeholder="PO number, cold-chain instructions, etc."
                />
              </label>
              <button
                onClick={() => {
                  setSubmitted(true);
                  clear();
                }}
                className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-2.5 font-medium text-gray-700 transition hover:border-gray-400"
              >
                Submit order request
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
