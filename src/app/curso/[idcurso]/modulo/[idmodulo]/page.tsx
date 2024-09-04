import { getModulo } from "~/server/queries";

export default async function Modulo({
  params,
}: {
  params: { idmodulo: string; idcurso: string };
}) {
  const idAsNumber = parseInt(params.idmodulo);
  if (Number.isNaN(idAsNumber)) throw new Error("Modulo ID invalido");
  const modulo = await getModulo(idAsNumber);

  const videoId = modulo.urlVideo.slice(-11);
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            {`Módulo ${modulo.order}: ${modulo.name}`}
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
        </div>
      </section>
    </>
  );
}
