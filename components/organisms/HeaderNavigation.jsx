"use client";

import Link from "next/link";
import { useState } from "react";
import NavigationItem from "../molecules/NavigationItem";
import Icon from "../atoms/Icon";

export default function HeaderNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-teal-800"
        >
          PANGASINAN
          <span className="text-amber-500"> TRAILS</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavigationItem href="/">
            Home
          </NavigationItem>

          <NavigationItem href="/explore">
            Explore
          </NavigationItem>

          <NavigationItem href="/about">
            About
          </NavigationItem>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-gray-700 md:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-100 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavigationItem href="/">
              Home
            </NavigationItem>

            <NavigationItem href="/explore">
              Explore
            </NavigationItem>

            <NavigationItem href="/about">
              About
            </NavigationItem>
          </div>
        </nav>
      )}
    </header>
  );
}