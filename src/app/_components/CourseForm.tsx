"use client";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { cursoCategoriaeEnum } from "~/server/db/schema";
import { insertFormCourse } from "~/server/queries";
export default function CourseForm() {
  async function handleSubmit(formData: FormData) {
    const result = await insertFormCourse(formData);
    if (result) {
      toast("Error", {
        description: result,
        action: {
          label: "Cerrar",
          onClick: () => console.log("Cerrar"),
        },
      });
    } else {
      toast("Curso creado", {
        description: result,
        action: {
          label: "Cerrar",
          onClick: () => console.log("Cerrar"),
        },
      });
    }
  }
  return (
    <div className="bg-purple-50 py-8">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Crea un curso nuevo</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/assets/formIcons/form.png"
            alt="Form"
            width={70}
            height={70}
          />
          <form action={handleSubmit}>
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
                <Label htmlFor="category" className="font-bold">
                  Categoría
                </Label>
                <Select name="category" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona la categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categoría</SelectLabel>
                      {cursoCategoriaeEnum.enumValues.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="text-slate-500">
                  Este será la categoría del curso.
                </p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/assets/formIcons/movie.png"
                  alt="movie"
                  width={70}
                  height={70}
                />
                <Label htmlFor="urlTrailer" className="font-bold">
                  Link de Trailer Youtube
                </Label>
                <Input id="urlTrailer" name="urlTrailer" required></Input>
                <p className="text-slate-500">
                  Este será el link del video trailer del curso.
                </p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/assets/formIcons/image.png"
                  alt="movie"
                  width={70}
                  height={70}
                />
                <Label htmlFor="urlThumbnail" className="font-bold">
                  Link de Imagen Thumbnail
                </Label>
                <Input id="urlThumbnail" name="urlThumbnail" required></Input>
                <p className="text-slate-500">
                  Este será el link de la imagen del curso.
                </p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/assets/formIcons/dinero.png"
                  alt="dinero"
                  width={70}
                  height={70}
                />
                <Label htmlFor="price" className="font-bold">
                  Precio
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
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
