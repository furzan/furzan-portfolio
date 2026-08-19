export default function LogoMark({ light = true }: { light?: boolean }) {
  const color = light ? "#d4b483" : "#1a120c";
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.5" />
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fontFamily="var(--font-davinci), serif"
        fontSize="15"
        fontWeight="bold"
        fill={color}
      >
        F
      </text>
    </svg>
  );
}
