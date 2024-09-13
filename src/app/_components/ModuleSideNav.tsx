import Link from "next/link";
import { getNumberOfModules } from "~/server/queries";

export default async function ModuleSideNav({ idcurso }: { idcurso: number }) {
  const numberOfModules = await getNumberOfModules(idcurso);
  const loop = Array(numberOfModules)
    .fill(0)
    .map((_, i) => i + 1);
  return (
    <aside className="hidden h-min w-64 flex-col border-r bg-background p-4 sm:flex">
      <nav className="flex flex-col space-y-1">
        {loop.map((moduleNumber) => (
          <Link
            key={moduleNumber}
            href={`${moduleNumber}`}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            {`Módulo ${moduleNumber}`}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
