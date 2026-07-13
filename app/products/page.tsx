"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Products");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of products) {
      counts.set(p.shortCategory, (counts.get(p.shortCategory) ?? 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const tabs: [string, number][] = [
    ["All Products", products.length],
    ...categories,
  ];

  const visibleProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.shortCategory === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="-mx-4 overflow-x-auto px-4">
        <nav className="flex gap-2 whitespace-nowrap border-b border-gray-200 pb-px">
          {tabs.map(([cat, count]) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 border-b-2 px-3 py-2 text-sm transition ${
                activeCategory === cat
                  ? "border-blue-700 font-medium text-blue-900"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs text-gray-400">({count})</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
        {visibleProducts.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
