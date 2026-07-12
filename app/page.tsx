import Link from "next/link";

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
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
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
        <div className="grid gap-8 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-gray-900">How institutional access works</h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-4">
            {[
              { step: "1", title: "Apply", body: "Submit your institution name, PI, and institutional email." },
              { step: "2", title: "Review", body: "Our compliance team verifies your institutional affiliation." },
              { step: "3", title: "Approval", body: "Verified accounts unlock pricing and order requests." },
              { step: "4", title: "Order", body: "Submit an order request; our team confirms and invoices your institution." },
            ].map((s) => (
              <li key={s.step} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <span className="text-sm font-bold text-blue-900">Step {s.step}</span>
                <p className="mt-1 font-semibold text-gray-900">{s.title}</p>
                <p className="mt-1 text-sm text-gray-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
