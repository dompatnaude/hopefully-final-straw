"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

const navLinks = [
  { href: "/products", label: "Catalog" },
  { href: "/compliance", label: "Verification & Compliance" },
  { href: "/order-request", label: "Order Request" },
];

const statusLabel: Record<string, string> = {
  guest: "No account",
  pending: "Verification pending",
  verified: "Verified institution",
  rejected: "Application declined",
};

const statusColor: Record<string, string> = {
  guest: "bg-gray-100 text-gray-600",
  pending: "bg-amber-50 text-amber-700 border border-amber-200",
  verified: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  rejected: "bg-red-50 text-red-700 border border-red-200",
};

export default function Header() {
  const pathname = usePathname();
  const { status } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex flex-col items-start leading-none">
            <span className="text-4xl font-extrabold tracking-tight text-blue-900">
              Pep<span className="text-blue-500">X</span>
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              High Quality Peptides
            </span>
          </Link>
          <span className="hidden items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 sm:inline-flex">
            <span aria-hidden="true">🇺🇸</span>
            U.S. Based
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-blue-900 ${
                pathname === link.href ? "text-blue-900" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span
            className={`hidden rounded-full px-3 py-1 text-xs font-medium sm:inline-block ${statusColor[status]}`}
          >
            {statusLabel[status]}
          </span>
          <Link
            href="/account/status"
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
          >
            Account
          </Link>
          <Link
            href="/account/register"
            className="rounded-lg bg-blue-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            Apply for access
          </Link>
        </div>
      </div>
    </header>
  );
}
