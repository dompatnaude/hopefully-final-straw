"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pepx_entry_ack_v1";

export default function EntryGate() {
  const [visible, setVisible] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [ruoConfirmed, setRuoConfirmed] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  useEffect(() => {
    const ack = window.localStorage.getItem(STORAGE_KEY);
    if (!ack) setVisible(true);
  }, []);

  function handleEnter() {
    setAttemptedSubmit(true);
    if (!ageConfirmed || !ruoConfirmed) return;
    window.localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
        <h2 className="text-xl font-semibold text-gray-900">Before you continue</h2>
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
            Both boxes must be checked to enter the site.
          </p>
        )}

        <button
          onClick={handleEnter}
          className="mt-6 w-full rounded-lg bg-blue-900 px-4 py-2.5 font-medium text-white transition hover:bg-blue-800"
        >
          Enter site
        </button>
        <p className="mt-3 text-center text-xs text-gray-400">
          If you do not agree, please leave this site.
        </p>
      </div>
    </div>
  );
}
