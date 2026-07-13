import Link from "next/link";
import DnaHelixBackground from "@/components/DnaHelixBackground";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

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
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <DnaHelixBackground />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <span className="inline-block rounded-full border border-blue-900/20 bg-blue-50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-blue-900">
            Research Use Only
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Peptide reagents for verified research institutions.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Pep X Research supplies high-purity, lot-documented peptide reagents to
            universities, biotechnology companies, and contract research
            organizations. Every order is tied to a verified institutional account —
            we do not sell to individuals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-blue-900 px-5 py-3 font-medium text-white transition hover:bg-blue-800"
            >
              Browse catalog
            </Link>
            <Link
              href="/account/register"
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
            >
              Apply for institutional access
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Featured products</h2>
            <p className="mt-1 max-w-xl text-sm text-gray-600">
              A selection from our lot-documented, research-use-only catalog. Every
              product ships with a Certificate of Analysis.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden shrink-0 text-sm font-medium text-blue-900 hover:underline sm:block"
          >
            View full catalog →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <Link
          href="/products"
          className="mt-8 inline-block text-sm font-medium text-blue-900 hover:underline sm:hidden"
        >
          View full catalog →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
