"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pepx_entry_ack_v1";
const TYPE_KEY = "pepx_institution_type";

const INSTITUTION_TYPES = [
  "University / academic lab",
  "Biotechnology company",
  "Contract research organization (CRO)",
  "Hospital / clinical research department",
  "Government laboratory",
];

export default function EntryGate() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [ruoConfirmed, setRuoConfirmed] = useState(false);
  const [institutionType, setInstitutionType] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  useEffect(() => {
    const ack = window.localStorage.getItem(STORAGE_KEY);
    if (!ack) setVisible(true);
  }, []);

  function handleContinue() {
    setAttemptedSubmit(true);
    if (!ageConfirmed || !ruoConfirmed) return;
    setAttemptedSubmit(false);
    setStep(2);
  }

  function handleEnter() {
    setAttemptedSubmit(true);
    if (!institutionType) return;
    window.localStorage.setItem(STORAGE_KEY, "1");
    window.localStorage.setItem(TYPE_KEY, institutionType);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-900">
          Step {step} of 2
        </p>

        {step === 1 ? (
          <>
            <h2 className="mt-2 text-xl font-semibold text-gray-900">Before you continue</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Pep X Research supplies laboratory reagents to verified research institutions,
              biotechnology companies, and universities. Products are sold strictly for
              in-vitro laboratory research use. They are{" "}
              <strong className="text-gray-900">not drugs, food, or cosmetics</strong>, are not
              for human or veterinary use, and are not to be introduced into the body in any
              manner.
            </p>

            <div className="mt-6 space-y-3">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={ageConfirmed}
                  onChange={(e) => setAgeConfirmed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-blue-900"
                />
                <span>I confirm that I am at least 21 years of age.</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={ruoConfirmed}
                  onChange={(e) => setRuoConfirmed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-blue-900"
                />
                <span>
                  I understand these products are labeled{" "}
                  <strong className="text-gray-900">Research Use Only (RUO)</strong>, are
                  restricted to verified research institutions, and are not intended for
                  human consumption, self-administration, or resale to individuals.
                </span>
              </label>
            </div>

            {attemptedSubmit && (!ageConfirmed || !ruoConfirmed) && (
              <p className="mt-3 text-sm text-red-600">
                Both boxes must be checked to continue.
              </p>
            )}

            <button
              onClick={handleContinue}
              className="mt-6 w-full rounded-lg bg-blue-900 px-4 py-2.5 font-medium text-white transition hover:bg-blue-800"
            >
              Continue
            </button>
          </>
        ) : (
          <>
            <h2 className="mt-2 text-xl font-semibold text-gray-900">
              What type of institution are you?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Select the option that best describes your organization. Access to Pep X
              Research is limited to research institutions.
            </p>

            <div className="mt-6 space-y-2">
              {INSTITUTION_TYPES.map((type) => (
                <label
                  key={type}
                  className={[
                    "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition",
                    institutionType === type
                      ? "border-blue-900 bg-blue-50 text-blue-900"
                      : "border-gray-200 text-gray-700 hover:border-gray-300",
                  ].join(" ")}
                >
                  <input
                    type="radio"
                    name="institutionType"
                    value={type}
                    checked={institutionType === type}
                    onChange={(e) => setInstitutionType(e.target.value)}
                    className="h-4 w-4 accent-blue-900"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            {attemptedSubmit && !institutionType && (
              <p className="mt-3 text-sm text-red-600">
                Please select an institution type to enter the site.
              </p>
            )}

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="rounded-lg border border-gray-300 px-4 py-2.5 font-medium text-gray-700 transition hover:border-gray-400"
              >
                Back
              </button>
              <button
                onClick={handleEnter}
                className="flex-1 rounded-lg bg-blue-900 px-4 py-2.5 font-medium text-white transition hover:bg-blue-800"
              >
                Enter site
              </button>
            </div>
          </>
        )}

        <p className="mt-3 text-center text-xs text-gray-400">
          If you do not agree, please leave this site.
        </p>
      </div>
    </div>
  );
}
