"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { useAuth } from "@/lib/auth-context";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const { status } = useAuth();
  const canSeePricing = status === "verified";
  const [activeCategory, setActiveCategory] = useState<string>("All Products");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of products) {
      counts.set(p.shortCategory, (counts.get(p.shortCategory) ?? 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const visibleProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.shortCategory === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reagent catalog</h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">
          All products are Research Use Only and sold exclusively to verified
          research institutions. Certificates of Analysis and Safety Data Sheets
          are available on every product page.
        </p>
        {!canSeePricing && (
          <div className="mt-4 inline-block rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800">
            {status === "pending"
              ? "Your application is under review — pricing unlocks once verified."
              : "Pricing is visible to verified institutional accounts only."}
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Categories
          </p>
          <nav className="mt-3 flex flex-col gap-1 text-sm">
            <button
              onClick={() => setActiveCategory("All Products")}
              className={`rounded-lg px-3 py-2 text-left transition ${
                activeCategory === "All Products"
                  ? "bg-blue-50 font-medium text-blue-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              All Products
              <span className="ml-1.5 text-xs text-gray-400">({products.length})</span>
            </button>
            {categories.map(([cat, count]) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3 py-2 text-left transition ${
                  activeCategory === cat
                    ? "bg-blue-50 font-medium text-blue-900"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs text-gray-400">({count})</span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((p) => (
            <ProductCard key={p.slug} product={p} canSeePricing={canSeePricing} />
          ))}
        </div>
      </div>
    </div>
  );
}
