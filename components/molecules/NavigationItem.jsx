"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationItem({
  href,
  children,
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition ${
        active
          ? "text-teal-700"
          : "text-gray-600 hover:text-teal-700"
      }`}
    >
      {children}
    </Link>
  );
}