import Link from "next/link";
import DnaHelixBackground from "@/components/DnaHelixBackground";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const announcements = [
  "Canada's #1 source for research peptides",
  "Free Xpresspost shipping on orders $300 & up",
  "Trusted by 10,000+ Canadian labs",
];

const heroCards = [
  { name: "BPC-157", size: "10 mg", price: "From $420 CAD" },
  { name: "Thymosin \u03b2-4", size: "10 mg", price: "From $480 CAD" },
  { name: "GHK-Cu", size: "10 mg", price: "From $95 CAD" },
];

const pillars = [
  {
    title: "Institution-verified only",
    body: "Every account is reviewed by our compliance team before pricing or ordering unlocks. We do not sell to individual consumers.",
  },
  {
    title: "Full documentation",
    body: "Certificate of Analysis (COA) and Safety Data Sheet (SDS) available for every lot, on every product page.",
  },
  {
    title: "RUO, clearly labeled",
    body: "Every product is labeled Research Use Only. Nothing in our catalog is a prescription drug or approved for human or veterinary use.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Announcement bar */}
      <div className="overflow-hidden bg-blue-700 text-white">
        <div className="flex animate-[scroll_28s_linear_infinite] whitespace-nowrap py-2.5 text-sm font-medium">
          {[...announcements, ...announcements, ...announcements].map((a, i) => (
            <span key={i} className="mx-10 inline-block">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-blue-50/40 to-white">
        <DnaHelixBackground />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-1.5 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Trusted research peptide supplier
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-700 sm:text-6xl">
              Peptides of the
              <br />
              Highest{" "}
              <span className="text-blue-600">Research-Grade Purity</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-500">
              Explore a wide range of peptide reagents for research purposes.
              Premium quality, lot-documented, and shipped to verified
              institutions across Canada.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Browse catalog
                <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href="/account/register"
                className="inline-flex items-center rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
              >
                Apply for access
              </Link>
            </div>
          </div>

          {/* Floating hero cards */}
          <div className="relative hidden h-80 lg:block">
            <div className="absolute inset-0 rounded-full bg-blue-100/40 blur-3xl" />
            {heroCards.map((c, i) => {
              const pos = [
                "left-4 top-6 -rotate-6",
                "right-6 top-24 rotate-3",
                "bottom-4 left-24 -rotate-2",
              ][i];
              return (
                <div
                  key={c.name}
                  className={"absolute w-52 rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-lg backdrop-blur " + pos}
                >
                  <p className="text-lg font-bold text-gray-900">{c.name}</p>
                  <p className="text-sm text-gray-400">{c.size}</p>
                  <p className="mt-1 font-semibold text-blue-600">{c.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Featured products
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-500">
              A selection from our lot-documented, research-use-only catalog.
              Every product ships with a Certificate of Analysis.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden shrink-0 text-sm font-semibold text-blue-600 hover:underline sm:block"
          >
            View full catalog &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <Link
          href="/products"
          className="mt-8 inline-block text-sm font-semibold text-blue-600 hover:underline sm:hidden"
        >
          View full catalog &rarr;
        </Link>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
