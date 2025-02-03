"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-3xl font-bold px-4 md:px-8 mt-6 md:mt-0">
        {pathname === "/"
          ? "About Me"
          : pathname === "/resume"
          ? "Resume"
          : pathname === "/portfolio"
          ? "Portfolio"
          : pathname === "/contact"
          ? "Contact"
          : "Blog"}
      </h1>
      <nav className="hidden md:inline-flex gap-16 bg-highlight/10 py-5 px-8 rounded-bl-3xl rounded-tr-3xl border border-highlight/10">
        <Link
          href="/"
          className={
            pathname === "/" ? "text-highlight" : "hover:text-neutral-400"
          }
        >
          About
        </Link>
        <Link
          href="/resume"
          className={
            pathname === "/resume" ? "text-highlight" : "hover:text-neutral-400"
          }
        >
          Resume
        </Link>
        <Link
          href="/portfolio"
          className={
            pathname === "/portfolio"
              ? "text-highlight"
              : "hover:text-neutral-400"
          }
        >
          Portfolio
        </Link>
        {/* <Link href="/blog">Blog</Link> */}
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? "text-highlight"
              : "hover:text-neutral-400"
          }
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
