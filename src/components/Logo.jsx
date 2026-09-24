export default function Logo({ className = "h-9 w-9" }) {
  return (
    <img
      src="/logo-mark.png"
      alt="Jayanth Technologies"
      className={`${className} object-contain`}
    />
  );
}
