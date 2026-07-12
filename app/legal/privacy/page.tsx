export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Privacy policy</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600">
        <p>
          We collect the information you provide when applying for institutional
          access (institution name, principal investigator, institutional email, and
          intended research use) solely to verify eligibility and process order
          requests.
        </p>
        <div>
          <h2 className="text-base font-semibold text-gray-900">What we don&apos;t do</h2>
          <p className="mt-2">
            We don&apos;t sell your data to third parties, and we don&apos;t use
            application data for anything beyond account verification, order
            fulfillment, and compliance recordkeeping.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">Retention</h2>
          <p className="mt-2">
            Application and order records are retained as required for regulatory
            and compliance purposes. Contact compliance@pepxresearch.example to
            request access to or deletion of your data.
          </p>
        </div>
        <p className="text-xs text-gray-400">
          This is placeholder policy text for a demo build — replace with counsel-
          reviewed language before handling real applicant data.
        </p>
      </div>
    </div>
  );
}
