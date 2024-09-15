"use client";
import Link from "next/link";
import { useState } from "react";

export default function ModuleSideNav({
  ordenModulo,
  numModules,
}: {
  ordenModulo: number;
  numModules: number;
}) {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const loop = Array(numModules)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <div>
      <button
        className="p-2 focus:outline-none"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={"M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <aside
        className={`${
          isNavOpen ? "block" : "hidden"
        } h-min w-64 flex-col border-r bg-background p-4`}
      >
        <nav className="flex flex-col space-y-1">
          {loop.map((moduleNumber) => (
            <Link
              key={moduleNumber}
              href={`${moduleNumber}`}
              className={`${ordenModulo === moduleNumber ? "bg-zinc-100" : ""} flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground`}
              prefetch={false}
              onClick={() => setIsNavOpen(false)}
            >
              {`Clase ${moduleNumber}`}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
