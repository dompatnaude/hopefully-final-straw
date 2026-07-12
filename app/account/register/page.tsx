"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function RegisterPage() {
  const { submitApplication, status } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    institutionName: "",
    institutionType: "University",
    piName: "",
    institutionalEmail: "",
    researchPurpose: "",
  });
  const [attested, setAttested] = useState(false);
  const [error, setError] = useState("");

  if (status === "pending" || status === "verified") {
    router.replace("/account/status");
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!attested) {
      setError("You must confirm the research-use attestation to submit.");
      return;
    }
    if (!form.institutionalEmail.includes("@")) {
      setError("Please enter a valid institutional email address.");
      return;
    }
    submitApplication({ ...form, submittedAt: new Date().toISOString() });
    router.push("/account/status");
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Apply for institutional access</h1>
      <p className="mt-2 text-sm text-gray-600">
        Access is restricted to verified research institutions, biotechnology
        companies, and universities. Applications are typically reviewed within 1–2
        business days.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <Field label="Institution / company name">
          <input
            required
            value={form.institutionName}
            onChange={(e) => setForm({ ...form, institutionName: e.target.value })}
            className="input"
            placeholder="e.g. Stanford University, Dept. of Chemistry"
          />
        </Field>

        <Field label="Institution type">
          <select
            value={form.institutionType}
            onChange={(e) => setForm({ ...form, institutionType: e.target.value })}
            className="input"
          >
            <option>University</option>
            <option>Biotechnology company</option>
            <option>Contract research organization</option>
            <option>Government / national laboratory</option>
            <option>Hospital research department</option>
          </select>
        </Field>

        <Field label="Principal investigator / lab lead">
          <input
            required
            value={form.piName}
            onChange={(e) => setForm({ ...form, piName: e.target.value })}
            className="input"
            placeholder="Dr. Jane Smith"
          />
        </Field>

        <Field label="Institutional email address">
          <input
            required
            type="email"
            value={form.institutionalEmail}
            onChange={(e) => setForm({ ...form, institutionalEmail: e.target.value })}
            className="input"
            placeholder="name@university.edu"
          />
          <p className="mt-1 text-xs text-gray-400">
            Must be an institutional domain — personal email addresses (gmail, yahoo,
            etc.) cannot be verified.
          </p>
        </Field>

        <Field label="Intended research use">
          <textarea
            required
            value={form.researchPurpose}
            onChange={(e) => setForm({ ...form, researchPurpose: e.target.value })}
            className="input min-h-24"
            placeholder="Briefly describe the research application (e.g. in vitro cell migration assays)."
          />
        </Field>

        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={attested}
            onChange={(e) => setAttested(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-blue-900"
          />
          <span>
            I attest that I am purchasing on behalf of the institution named above,
            solely for laboratory research use, and that products will not be resold,
            distributed to individuals, or used for human or veterinary
            administration in any form.
          </span>
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-900 px-4 py-2.5 font-medium text-white transition hover:bg-blue-800"
        >
          Submit application
        </button>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
