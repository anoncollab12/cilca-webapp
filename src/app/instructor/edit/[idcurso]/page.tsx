import { getCourse } from "~/server/queries";
import { TitleForm } from "../../_components/title-form";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { DescriptionForm } from "../../_components/description-form";
import { TrailerForm } from "../../_components/trailer-form";
import { ImageForm } from "../../_components/image-form";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { PriceForm } from "../../_components/price-form";
import { Separator } from "~/components/ui/separator";
import ModuleAddForm from "~/app/_components/ModuleAddForm";

export default async function Edit({
  params,
}: {
  params: { idcurso: string };
}) {
  const authData = auth();
  const sessionsClaims = authData?.sessionClaims;
  const idAsNumber = parseInt(params.idcurso);

  if (Number.isNaN(idAsNumber)) throw new Error("Curso ID invalido");
  const curso = await getCourse(idAsNumber);

  if (
    sessionsClaims?.metadata.role != "admin" &&
    authData.userId !== curso.authorId
  ) {
    redirect("/");
  }
  return (
    <>
      <div className="bg-purple-50 py-8">
        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader></CardHeader>
          <CardContent>
            <CardTitle>Edita el curso creado</CardTitle>
            <TitleForm
              courseId={params.idcurso}
              initialData={{ title: curso.name }}
            />
            <DescriptionForm
              courseId={params.idcurso}
              initialData={{ title: curso.description }}
            />
            <TrailerForm
              courseId={params.idcurso}
              initialData={{ title: curso.urlTrailer }}
            />
            <ImageForm
              courseId={params.idcurso}
              initialData={{ title: curso.urlThumbnail }}
            />
            <PriceForm
              courseId={params.idcurso}
              initialData={{ title: curso.price }}
            />
            <Separator className="my-5" />
            <Separator orientation="vertical" />
            <div className="py-5">
              <CardTitle>Editar las clases del curso</CardTitle>
            </div>
            <ModuleAddForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
