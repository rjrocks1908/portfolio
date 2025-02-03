"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Bottombar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 backdrop-blur-md bg-neutral-800/70 border border-neutral-800 rounded-t-3xl ${className}`}
    >
      <nav className="container mx-auto flex justify-center items-center gap-6 sm:gap-12 py-4 px-6">
        <Link
          href="/"
          className={`flex flex-col items-center ${
            pathname === "/" ? "text-highlight" : "hover:text-neutral-400"
          }`}
        >
          <span className="text-sm">About</span>
        </Link>
        <Link
          href="/resume"
          className={`flex flex-col items-center ${
            pathname === "/resume" ? "text-highlight" : "hover:text-neutral-400"
          }`}
        >
          <span className="text-sm">Resume</span>
        </Link>
        <Link
          href="/portfolio"
          className={`flex flex-col items-center ${
            pathname === "/portfolio"
              ? "text-highlight"
              : "hover:text-neutral-400"
          }`}
        >
          <span className="text-sm">Portfolio</span>
        </Link>
        <Link
          href="/contact"
          className={`flex flex-col items-center ${
            pathname === "/contact"
              ? "text-highlight"
              : "hover:text-neutral-400"
          }`}
        >
          <span className="text-sm">Contact</span>
        </Link>
      </nav>
    </div>
  );
}

export default Bottombar;
