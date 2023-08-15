"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation({ navLinks }) {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        console.log("isActive", isActive);

        return (
          <Link
            className={isActive ? "text-red-500" : "text-black"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
