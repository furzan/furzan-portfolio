type HexagonProps = {
  filled?: boolean;
  light?: boolean;
  className?: string;
};

/** Small hexagonal outline used as a pagination / section indicator. */
export default function Hexagon({
  filled = false,
  light = false,
  className = "",
}: HexagonProps) {
  const stroke = light ? "#ffffff" : "#000000";
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden
    >
      <polygon
        points="3,0.5 9,0.5 11.5,6 9,11.5 3,11.5 0.5,6"
        stroke={stroke}
        strokeWidth="1"
        fill={filled ? stroke : "none"}
      />
    </svg>
  );
}
