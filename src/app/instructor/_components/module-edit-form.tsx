"use client";

import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ModuleTitle } from "./module-title";
import { ModuleDescription } from "./module-description";
import { ModuleVideo } from "./module-video";
import { deleteClass, getClassId } from "./actions";
import { moduleSchema } from "~/lib/validations";
import { type z } from "zod";
import { insertModulo } from "~/server/queries";

interface Module {
  id: number;
  name: string;
  description: string | null;
  urlVideo: string;
}

interface ModuleEditFormProps {
  modules: Module[];
  courseId: number;
}

export default function ModuleEditForm({
  modules,
  courseId,
}: ModuleEditFormProps) {
  const [classes, setClasses] = useState(modules);

  const addClass = async (event: React.MouseEvent) => {
    event.preventDefault();
    const modules: z.infer<typeof moduleSchema>[] = [];
    const defaultData = {
      id: 0,
      name: "Titulo del clase nueva",
      description: "Descripción de clase nueva ",
      urlVideo: "https://www.youtube.com/watch?v=u6SA6_p-_MY",
      order: classes.length + 1,
      cursoId: courseId,
    };
    const validatedData = moduleSchema.parse(defaultData);
    modules.push(validatedData);
    await insertModulo(modules);
    defaultData.id = await getClassId(classes.length + 1);
    setClasses([...classes, defaultData]);
  };

  const removeClass = async (
    event: React.MouseEvent,
    index: number,
    id: number,
  ) => {
    event.preventDefault();
    const updatedClasses = [...classes];
    updatedClasses.splice(index, 1);
    await deleteClass(id);
    setClasses(updatedClasses);
  };

  return (
    <div className="space-y-4">
      {classes.map((classItem, index) => (
        <div key={index} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor={`class-title-${index}`} className="font-bold">
              Clase {index + 1}
            </Label>
            <ModuleTitle
              moduleId={classItem.id}
              initialData={{ title: classItem.name }}
            />
          </div>
          <ModuleDescription
            moduleId={classItem.id}
            initialData={{ title: classItem.description }}
          />
          <ModuleVideo
            moduleId={classItem.id}
            initialData={{ title: classItem.urlVideo }}
          />
          {index > 0 && (
            <Button
              variant="destructive"
              onClick={(event) => removeClass(event, index, classItem.id)}
            >
              <XIcon className="mr-2 h-4 w-4" />
              Quitar clase {index + 1}
            </Button>
          )}
        </div>
      ))}
      <Button variant="outline" onClick={addClass}>
        <PlusIcon className="mr-2 h-4 w-4" />
        Agregar Clase
      </Button>
    </div>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
