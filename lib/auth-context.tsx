"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type VerificationStatus = "guest" | "pending" | "verified" | "rejected";

export type AccountApplication = {
  institutionName: string;
  institutionType: string;
  piName: string;
  institutionalEmail: string;
  researchPurpose: string;
  submittedAt: string;
};

type AuthContextValue = {
  status: VerificationStatus;
  application: AccountApplication | null;
  submitApplication: (app: AccountApplication) => void;
  resetAccount: () => void;
  // Demo-only affordance: in production the review step happens on a real
  // backend by compliance staff, not client-side. See app/account/status/page.tsx.
  setDemoStatus: (status: VerificationStatus) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "pepx_account_v1";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<VerificationStatus>("guest");
  const [application, setApplication] = useState<AccountApplication | null>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setStatus(parsed.status ?? "guest");
        setApplication(parsed.application ?? null);
      } catch {
        // ignore corrupt local state
      }
    }
  }, []);

  function persist(nextStatus: VerificationStatus, nextApplication: AccountApplication | null) {
    setStatus(nextStatus);
    setApplication(nextApplication);
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: nextStatus, application: nextApplication })
    );
  }

  function submitApplication(app: AccountApplication) {
    persist("pending", app);
  }

  function resetAccount() {
    window.localStorage.removeItem(STORAGE_KEY);
    setStatus("guest");
    setApplication(null);
  }

  function setDemoStatus(next: VerificationStatus) {
    persist(next, application);
  }

  return (
    <AuthContext.Provider
      value={{ status, application, submitApplication, resetAccount, setDemoStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
