"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/lib/products";
import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const { status } = useAuth();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-gray-600">Product not found.</p>
        <Link href="/products" className="mt-4 inline-block text-blue-900 hover:underline">
          Back to catalog
        </Link>
      </div>
    );
  }

  const verified = status === "verified";
  const pack = product.packSizes[selectedSize];

  function handleAdd() {
    addItem({ slug: product!.slug, name: product!.name, sizeMg: pack.sizeMg, pricePerUnit: pack.pricePerUnit, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/products" className="text-sm text-gray-500 hover:text-gray-900">
        ← Back to catalog
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-blue-900">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-gray-200 pt-6 text-sm">
            <div>
              <dt className="text-gray-400">CAS number</dt>
              <dd className="mt-1 font-mono text-gray-700">{product.casNumber}</dd>
            </div>
            <div>
              <dt className="text-gray-400">Purity</dt>
              <dd className="mt-1 text-gray-700">{product.purity}</dd>
            </div>
            <div>
              <dt className="text-gray-400">Form</dt>
              <dd className="mt-1 text-gray-700">{product.form}</dd>
            </div>
            <div>
              <dt className="text-gray-400">Storage</dt>
              <dd className="mt-1 text-gray-700">{product.storage}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-gray-400">Sequence</dt>
              <dd className="mt-1 break-words font-mono text-xs text-gray-700">
                {product.sequence}
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <h2 className="font-semibold text-gray-900">Research applications</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
              {product.researchApplications.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-blue-900">•</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              disabled={!verified}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:border-gray-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {product.coaAvailable ? "Download COA" : "COA unavailable"}
            </button>
            <button
              disabled={!verified}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:border-gray-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {product.sdsAvailable ? "Download SDS" : "SDS unavailable"}
            </button>
          </div>
          {!verified && (
            <p className="mt-2 text-xs text-gray-400">
              COA/SDS downloads are available to verified institutional accounts.
            </p>
          )}
        </div>

        <aside className="h-fit rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900">Order this reagent</h3>
          <div className="mt-4 space-y-2">
            {product.packSizes.map((size, i) => (
              <label
                key={size.sizeMg}
                className={`flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2 text-sm transition ${
                  selectedSize === i
                    ? "border-blue-900 bg-blue-50 text-gray-900"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="size"
                    checked={selectedSize === i}
                    onChange={() => setSelectedSize(i)}
                    className="accent-blue-900"
                  />
                  {size.sizeMg} mg
                </span>
                <span className="font-medium">${size.pricePerUnit}</span>
              </label>
            ))}
          </div>
          <button
            onClick={handleAdd}
            className="mt-5 w-full rounded-lg bg-blue-900 px-4 py-2.5 font-medium text-white transition hover:bg-blue-800"
          >
            {added ? "Added to order request" : "Add to order request"}
          </button>
          <p className="mt-3 text-xs text-gray-400">
            Adding to an order request does not charge your institution.
            Institutional verification is confirmed at checkout.
          </p>
        </aside>
      </div>
    </div>
  );
}
