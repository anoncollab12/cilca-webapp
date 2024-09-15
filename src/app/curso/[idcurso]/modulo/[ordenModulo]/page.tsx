import ModuleNavButtons from "~/app/_components/ModuleNavButtons";
import ModuleSideNav from "~/app/_components/ModuleSideNav";
import { getModulo, getNumberOfModules } from "~/server/queries";

export default async function Modulo({
  params,
}: {
  params: { ordenModulo: string; idcurso: string };
}) {
  const ordenAsNum = parseInt(params.ordenModulo);
  const idCursoAsNum = parseInt(params.idcurso);
  if (Number.isNaN(ordenAsNum)) throw new Error("Orden invalido");
  if (Number.isNaN(idCursoAsNum)) throw new Error("Curso ID invalido");

  const modulo = await getModulo(idCursoAsNum, ordenAsNum);
  const numModules = await getNumberOfModules(idCursoAsNum);

  const videoId = modulo.urlVideo.slice(-11);
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex w-full">
          <ModuleSideNav ordenModulo={ordenAsNum} numModules={numModules} />
          <div className="flex w-full flex-col items-center justify-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              {`Clase ${modulo.order}: ${modulo.name}`}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
              {modulo.description}
            </p>
            <iframe
              className="h-96 w-full"
              src={`https://www.youtube.com/embed/${videoId}?si=draVAGR-JHfe_lvO&amp;controls=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <ModuleNavButtons
              ordenModulo={ordenAsNum}
              numModules={numModules}
            />
          </div>
        </div>
      </section>
    </>
  );
}
