import Link from "next/link";

export default function ModuleSideNav() {
  return (
    <aside className="hidden h-min w-64 flex-col border-r bg-background p-4 sm:flex">
      <nav className="flex flex-col space-y-1">
        <Link
          href="1"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          Módulo 1
        </Link>
        <Link
          href="2"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          Módulo 2
        </Link>
        <Link
          href="3"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          prefetch={false}
        >
          Módulo 3
        </Link>
      </nav>
    </aside>
  );
}
