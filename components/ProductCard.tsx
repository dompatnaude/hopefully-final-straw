import Link from "next/link";
import { Product } from "@/lib/products";
import VialIcon from "@/components/VialIcon";

export default function ProductCard({
  product,
  canSeePricing,
}: {
  product: Product;
  canSeePricing: boolean;
}) {
  const lowestPrice = Math.min(...product.packSizes.map((p) => p.pricePerUnit));
  const highestPrice = Math.max(...product.packSizes.map((p) => p.pricePerUnit));

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        className="flex items-center justify-center bg-gray-50 py-8"
      >
        <VialIcon className="h-28 w-auto transition group-hover:scale-105" />
      </Link>

      <div className="flex flex-1 flex-col items-center px-5 pb-5 pt-4 text-center">
        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
          {product.shortCategory}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-1 font-semibold text-blue-900 hover:underline"
        >
          {product.name}
        </Link>

        <p className="mt-2 text-sm font-medium text-gray-900">
          {canSeePricing
            ? lowestPrice === highestPrice
              ? `$${lowestPrice}`
              : `$${lowestPrice} – $${highestPrice}`
            : "Sign in for pricing"}
        </p>

        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-900 px-4 py-1.5 text-sm font-medium text-blue-900 transition hover:bg-blue-900 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="21" r="1" fill="currentColor" />
            <circle cx="18" cy="21" r="1" fill="currentColor" />
          </svg>
          {canSeePricing ? "Select options" : "View details"}
        </Link>
      </div>
    </div>
  );
}
