import CursoCard from "~/app/_components/CursoCard";
import CategorySelection from "./_components/Categories";
import { getCourseByCategory } from "~/server/queries";
import { cursoCategoriaeEnum } from "~/server/db/schema";

export const dynamic = "force-dynamic";

export default async function Cursos({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  type CursoCategoria = (typeof cursoCategoriaeEnum.enumValues)[number];
  function isValidCategory(category: string): category is CursoCategoria {
    return cursoCategoriaeEnum.enumValues.includes(category as CursoCategoria);
  }
  const { category = "" } = await searchParams;

  const validCategory: CursoCategoria | undefined = isValidCategory(category)
    ? category
    : undefined;

  const cursos = await getCourseByCategory(validCategory);
  return (
    <>
      <section className="bg-gray-50 py-4 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="items-end justify-between space-y-4 sm:flex sm:space-y-0">
            <div>
              <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Cursos
              </h2>
            </div>
          </div>
          <CategorySelection />
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {cursos.map((curso) => (
              <CursoCard
                key={curso.id}
                id={curso.id}
                name={curso.name}
                authorid={curso.authorId}
                urlThumbnail={curso.urlThumbnail}
                category={curso.category}
                price={curso.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
