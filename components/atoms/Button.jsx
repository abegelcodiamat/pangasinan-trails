import Link from "next/link";

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-teal-700 text-white hover:bg-teal-800",
    secondary:
      "bg-amber-500 text-white hover:bg-amber-600",
    outline:
      "border border-teal-700 text-teal-700 hover:bg-teal-50",
  };

  const classes = `
    inline-flex items-center justify-center
    rounded-full px-5 py-3
    text-sm font-semibold
    transition duration-200
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}