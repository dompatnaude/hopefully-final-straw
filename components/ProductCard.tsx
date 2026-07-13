import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const lowestPrice = Math.min(...product.packSizes.map((p) => p.pricePerUnit));
  const highestPrice = Math.max(...product.packSizes.map((p) => p.pricePerUnit));

  const coaMailto =
    "mailto:compliance@pepxresearch.example?subject=" +
    encodeURIComponent("COA request: " + product.name) +
    "&body=" +
    encodeURIComponent(
      "Please send the Certificate of Analysis for " +
        product.name +
        " (CAS " +
        product.casNumber +
        ")."
    );

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        className="flex items-center justify-center bg-gray-50 py-6 sm:py-8"
      >
        <img
          src="/products/vial.png"
          alt={product.name}
          className="h-20 w-auto object-contain transition group-hover:scale-105 sm:h-28"
        />
      </Link>

      <div className="flex flex-1 flex-col items-center px-3 pb-4 pt-3 text-center sm:px-5 sm:pb-5 sm:pt-4">
        <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400 sm:text-[11px]">
          {product.shortCategory}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-1 text-sm font-semibold text-blue-900 hover:underline sm:text-base"
        >
          {product.name}
        </Link>

        <p className="mt-1.5 text-sm font-medium text-gray-900 sm:mt-2">
          {lowestPrice === highestPrice
            ? `$${lowestPrice}`
            : `$${lowestPrice} – $${highestPrice}`}
        </p>

        <Link
          href={`/products/${product.slug}`}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-900 px-3 py-1.5 text-xs font-medium text-blue-900 transition hover:bg-blue-900 hover:text-white sm:mt-4 sm:px-4 sm:text-sm"
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
          Select options
        </Link>

        <a
          href={coaMailto}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900 sm:px-4 sm:text-sm"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          Request COA
        </a>
      </div>
    </div>
  );
}
