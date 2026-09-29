export default function Icon({
  name,
  size = 20,
  className = "",
}) {
  const icons = {
    search: "⌕",
    menu: "☰",
    arrow: "→",
    location: "⌖",
    close: "×",
  };

  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        fontSize: size,
        lineHeight: 1,
      }}
    >
      {icons[name] || "•"}
    </span>
  );
}