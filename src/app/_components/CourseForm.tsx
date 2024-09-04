import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { insertFormCourse } from "~/server/queries";
export default function CourseForm() {
  return (
    <div className="bg-purple-50 py-8">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Crea un curso nuevo</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={insertFormCourse}>
            <div className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">
                  Título del curso
                </Label>
                <Input id="name" name="name" required></Input>
                <p className="text-slate-500">
                  Este será el título principal del curso.
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="description" className="font-bold">
                  Descripción
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                ></Textarea>
                <p className="text-slate-500">
                  Este será la descripción del curso.
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="urlTrailer" className="font-bold">
                  Link de Trailer Youtube
                </Label>
                <Input id="urlTrailer" name="urlTrailer" required></Input>
                <p className="text-slate-500">
                  Este será el link del video trailer del curso.
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="urlThumbnail" className="font-bold">
                  Link de Imagen Thumbnail
                </Label>
                <Input id="urlThumbnail" name="urlThumbnail" required></Input>
                <p className="text-slate-500">
                  Este será el link de la imagen del curso.
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="price" className="font-bold">
                  Precio
                </Label>
                <Input
                  id="price"
                  name="price"
                  required
                  min="0"
                  step="0.01"
                ></Input>
                <p className="text-slate-500">Este será el precio del curso.</p>
              </div>
            </div>
            <div className="pt-4">
              <Button type="submit">Crear curso</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
