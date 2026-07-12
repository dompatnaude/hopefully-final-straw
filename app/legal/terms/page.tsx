export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Terms of sale</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600">
        <p>
          These terms govern sales made by Pep X Research to verified institutional
          accounts. Placing an order request does not constitute a completed sale —
          all orders are subject to confirmation, lot availability, and institutional
          invoicing by our sales team.
        </p>
        <div>
          <h2 className="text-base font-semibold text-gray-900">Eligibility</h2>
          <p className="mt-2">
            Only accounts verified under our institutional-access process may place
            order requests. See our{" "}
            <a href="/compliance" className="text-blue-900 hover:underline">
              verification & compliance
            </a>{" "}
            page for details.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">Payment</h2>
          <p className="mt-2">
            Payment terms are arranged directly with your institution&apos;s
            purchasing department following order confirmation (e.g. net-30
            invoicing or purchase order). No payment is collected through the order
            request form itself.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">Shipping</h2>
          <p className="mt-2">
            Orders ship to verified institutional addresses only — we do not ship to
            residential addresses or PO boxes.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">Governing use</h2>
          <p className="mt-2">
            All sales are subject to our{" "}
            <a href="/legal/ruo-policy" className="text-blue-900 hover:underline">
              RUO policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
