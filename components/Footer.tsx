import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <strong>Research Use Only.</strong> All products sold by Pep X Research are
          intended solely for in-vitro laboratory research by qualified institutions.
          They are not drugs, dietary supplements, or cosmetics; they are not for human
          or veterinary use, diagnostic use, or in-vivo administration of any kind; and
          they are not for personal, recreational, or resale-to-consumer purposes. Sales
          are restricted to verified research institutions, biotechnology companies, and
          universities. See our{" "}
          <Link href="/legal/ruo-policy" className="underline hover:text-amber-950">
            RUO Policy
          </Link>{" "}
          for full terms.
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-gray-500 sm:grid-cols-4">
          <div>
            <p className="font-semibold text-gray-900">Company</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/compliance" className="hover:text-blue-900">Compliance</Link></li>
              <li><Link href="/products" className="hover:text-blue-900">Catalog</Link></li>
              <li><Link href="/order-request" className="hover:text-blue-900">Order request</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Account</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/account/register" className="hover:text-blue-900">Apply for access</Link></li>
              <li><Link href="/account/status" className="hover:text-blue-900">Application status</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Legal</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/legal/ruo-policy" className="hover:text-blue-900">RUO policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-blue-900">Terms of sale</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-blue-900">Privacy policy</Link></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-semibold text-gray-900">Contact</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="mailto:compliance@pepxresearch.example"
                  className="break-words hover:text-blue-900"
                >
                  compliance@pepxresearch.example
                </a>
              </li>
              <li>Institutional inquiries only</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Pep X Research. Not affiliated with any hospital,
            pharmacy, or telehealth provider.
          </p>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600">
            <span aria-hidden="true">🇺🇸</span>
            U.S. Based Company
          </span>
        </div>
      </div>
    </footer>
  );
}
