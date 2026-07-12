export default function CompliancePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Verification & compliance</h1>
      <p className="mt-3 text-gray-600">
        Pep X Research exists to supply documented, high-purity peptide reagents to
        legitimate research organizations — not to individuals. Here&apos;s how we
        keep it that way.
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">Who can buy</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Accounts are limited to universities, biotechnology companies, contract
            research organizations, hospital research departments, and government
            laboratories. We do not sell to individual consumers, and we do not
            accept orders from personal email addresses.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">How verification works</h2>
          <ol className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
            <li>
              <strong className="text-gray-900">1. Application.</strong> Applicants
              submit institution name, principal investigator, institutional email
              domain, and intended research use.
            </li>
            <li>
              <strong className="text-gray-900">2. Domain and affiliation check.</strong>{" "}
              Our compliance team confirms the institutional email domain and, where
              needed, verifies affiliation directly with the institution.
            </li>
            <li>
              <strong className="text-gray-900">3. Approval.</strong> Verified accounts
              unlock catalog pricing, COA/SDS downloads, and order requests.
              Applications that can&apos;t be verified are declined.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">What we don&apos;t sell</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Our catalog excludes anything approved or marketed as a prescription
            drug, pre-mixed multi-compound &quot;blends&quot;, and reconstitution
            accessories bundled for self-administration. Every product ships as
            lyophilized powder in laboratory reagent quantities, documented with a
            Certificate of Analysis and Safety Data Sheet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Ongoing monitoring</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Order patterns inconsistent with institutional research use (e.g. small
            individual quantities, shipping to residential addresses, repeated
            declined-then-reapplied accounts) are flagged for manual review and may
            result in an account being suspended.
          </p>
        </section>
      </div>
    </div>
  );
}
