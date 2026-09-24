export default function Logo({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="jt-logo-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7C4DFF" />
          <stop offset="1" stopColor="#E93D82" />
        </linearGradient>
      </defs>
      <path
        d="M8 6H26C29.3137 6 32 8.68629 32 12V12C32 15.3137 29.3137 18 26 18H16"
        stroke="url(#jt-logo-grad)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M16 18V28C16 31.3137 13.3137 34 10 34V34C6.68629 34 4 31.3137 4 28"
        stroke="url(#jt-logo-grad)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="28" r="4" fill="url(#jt-logo-grad)" />
    </svg>
  );
}
