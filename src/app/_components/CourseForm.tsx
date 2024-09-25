"use client";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
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
import ModuleAddForm from "./ModuleAddForm";
import { Separator } from "~/components/ui/separator";
import { insertFormCourse, insertModulo } from "~/server/queries";
import { moduleSchema } from "~/lib/validations";
import { type z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
export default function CourseForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const courseData = {
      name: formData.get(`name`),
      description: formData.get(`description`),
      urlThumbnail: formData.get(`urlThumbnail`),
      urlTrailer: formData.get(`urlTrailer`),
      category: formData.get(`category`),
      price: formData.get(`price`),
    };
    const cursoId = await insertFormCourse(courseData);

    if (!cursoId) {
      toast("Error", {
        description: "Curso no pudo ser creado",
        action: {
          label: "Cerrar",
          onClick: () => console.log("Cerrar"),
        },
      });
      setIsLoading(false);
      return;
    }

    const modules: z.infer<typeof moduleSchema>[] = [];
    for (let i = 0; formData.has(`class-title-${i}`); i++) {
      const moduleData = {
        name: formData.get(`class-title-${i}`),
        description: formData.get(`class-description-${i}`),
        urlVideo: formData.get(`class-url-${i}`),
        order: i + 1,
        cursoId: cursoId,
      };
      const validatedData = moduleSchema.parse(moduleData);
      modules.push(validatedData);
    }

    const result = await insertModulo(modules);
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
        description: "Curso creado correctamente",
        action: {
          label: "Cerrar",
          onClick: () => console.log("Cerrar"),
        },
      });
    }

    setIsLoading(false);
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
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Este será el título principal del curso."
                ></Input>
              </div>
              <div className="space-y-1">
                <Label htmlFor="description" className="font-bold">
                  Descripción
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  placeholder="Este será la descripción del curso."
                ></Textarea>
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
                <Input
                  id="urlTrailer"
                  name="urlTrailer"
                  required
                  placeholder="www.youtube.com/watch?v=id"
                ></Input>
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
                <Input
                  id="urlThumbnail"
                  name="urlThumbnail"
                  required
                  placeholder="www.imgur.com/id.jpeg"
                ></Input>
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
                  placeholder="0.00"
                ></Input>
              </div>
            </div>
            <Separator className="my-5" />
            <Separator orientation="vertical" />
            <div className="py-5">
              <CardTitle>Agrega las clases del curso</CardTitle>
            </div>
            <ModuleAddForm />
            <div className="pt-4">
              {" "}
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creando curso..." : "Crear curso"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
