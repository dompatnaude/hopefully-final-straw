export default function VialIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* crimp cap */}
      <rect x="42" y="10" width="36" height="14" rx="3" fill="#1E3A8A" />
      <rect x="38" y="22" width="44" height="10" rx="2" fill="#1E40AF" />
      {/* stopper */}
      <rect x="44" y="30" width="32" height="10" fill="#CBD5E1" />
      {/* glass body */}
      <rect
        x="26"
        y="38"
        width="68"
        height="104"
        rx="10"
        fill="#FFFFFF"
        stroke="#D1D5DB"
        strokeWidth="2"
      />
      {/* label */}
      <rect x="32" y="70" width="56" height="40" rx="3" fill="#F1F5F9" stroke="#E5E7EB" />
      <rect x="38" y="78" width="44" height="4" rx="2" fill="#94A3B8" />
      <rect x="38" y="88" width="32" height="4" rx="2" fill="#CBD5E1" />
      <rect x="38" y="98" width="38" height="4" rx="2" fill="#CBD5E1" />
      {/* fill line */}
      <rect x="26" y="118" width="68" height="24" rx="0" fill="#EFF6FF" opacity="0.6" />
    </svg>
  );
}
