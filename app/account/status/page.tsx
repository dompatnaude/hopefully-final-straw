"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function AccountStatusPage() {
  const { status, application, resetAccount, setDemoStatus } = useAuth();

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Account status</h1>

      {status === "guest" && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <p className="text-gray-600">You don&apos;t have an application on file yet.</p>
          <Link
            href="/account/register"
            className="mt-4 inline-block rounded-lg bg-blue-900 px-4 py-2 font-medium text-white hover:bg-blue-800"
          >
            Apply for institutional access
          </Link>
        </div>
      )}

      {status === "pending" && application && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="font-medium text-amber-800">Application under review</p>
          <p className="mt-2 text-sm text-amber-700">
            Our compliance team verifies institutional affiliation before granting
            access. This usually takes 1–2 business days. You&apos;ll receive an email
            at <strong>{application.institutionalEmail}</strong> once a decision is
            made.
          </p>
          <dl className="mt-5 space-y-2 text-sm text-gray-700">
            <Row label="Institution" value={application.institutionName} />
            <Row label="Type" value={application.institutionType} />
            <Row label="PI / lab lead" value={application.piName} />
            <Row
              label="Submitted"
              value={new Date(application.submittedAt).toLocaleDateString()}
            />
          </dl>
        </div>
      )}

      {status === "verified" && application && (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <p className="font-medium text-emerald-800">Verified institutional account</p>
          <p className="mt-2 text-sm text-emerald-700">
            {application.institutionName} is verified. Pricing, COA/SDS downloads, and
            order requests are unlocked.
          </p>
          <Link
            href="/products"
            className="mt-4 inline-block rounded-lg bg-blue-900 px-4 py-2 font-medium text-white hover:bg-blue-800"
          >
            Browse catalog
          </Link>
        </div>
      )}

      {status === "rejected" && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-6">
          <p className="font-medium text-red-800">Application declined</p>
          <p className="mt-2 text-sm text-red-700">
            We couldn&apos;t verify an institutional affiliation from the information
            provided. Contact compliance@pepxresearch.example if you believe this is
            an error.
          </p>
        </div>
      )}

      <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Demo controls — not for production
        </p>
        <p className="mt-2 text-xs leading-relaxed text-gray-400">
          This site has no backend yet, so verification review is simulated locally.
          Before launch, replace this panel with a real compliance workflow: an admin
          dashboard where staff verify institutional affiliation (e.g. confirm email
          domain, check a university/company directory, or call to confirm) and
          approve or reject accounts server-side.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setDemoStatus("pending")}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:border-gray-400"
          >
            Simulate: pending
          </button>
          <button
            onClick={() => setDemoStatus("verified")}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:border-gray-400"
          >
            Simulate: approve
          </button>
          <button
            onClick={() => setDemoStatus("rejected")}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:border-gray-400"
          >
            Simulate: reject
          </button>
          <button
            onClick={resetAccount}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:border-gray-400"
          >
            Reset account
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-gray-200 pb-1.5">
      <dt className="text-gray-400">{label}</dt>
      <dd className="text-right text-gray-700">{value}</dd>
    </div>
  );
}
