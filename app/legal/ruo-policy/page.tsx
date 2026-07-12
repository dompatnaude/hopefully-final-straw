export default function RuoPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Research Use Only (RUO) policy</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600">
        <p>
          All products sold by Pep X Research are intended exclusively for
          laboratory research purposes by qualified professionals. Products are{" "}
          <strong className="text-gray-900">not</strong> drugs, biologics, dietary
          supplements, cosmetics, or medical devices, and have{" "}
          <strong className="text-gray-900">not</strong> been evaluated or approved by
          the FDA or any equivalent regulatory body for human or veterinary use.
        </p>

        <div>
          <h2 className="text-base font-semibold text-gray-900">Permitted use</h2>
          <p className="mt-2">
            Products may be used only for in-vitro laboratory research, analytical
            testing, or manufacturing of other research materials by verified
            research institutions. Buyers must have appropriate training, equipment,
            and institutional oversight (e.g. an IRB, IACUC, or biosafety committee
            where applicable) for their intended use.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">Prohibited use</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>Human or veterinary administration in any form.</li>
            <li>Personal, recreational, cosmetic, or self-experimentation use.</li>
            <li>Resale, repackaging, or distribution to individual consumers.</li>
            <li>
              Use in food, drugs, cosmetics, or any product intended for consumption
              or topical/internal application to a living body.
            </li>
            <li>Diagnostic or clinical use of any kind.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">Buyer attestation</h2>
          <p className="mt-2">
            By creating an account and placing an order, you attest that you are
            authorized to purchase on behalf of a verified research institution, that
            all products will be used solely for permitted research purposes, and
            that you will not transfer, resell, or otherwise make products available
            to individuals for human or veterinary use.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">Enforcement</h2>
          <p className="mt-2">
            We reserve the right to refuse, suspend, or cancel any account or order
            that we reasonably believe violates this policy, and to report suspected
            violations to relevant authorities.
          </p>
        </div>
      </div>
    </div>
  );
}
