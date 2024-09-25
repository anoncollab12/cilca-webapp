"use client";

import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function ModuleAddForm() {
  const [classes, setClasses] = useState([
    {
      title: "",
      description: "",
      url: "",
    },
  ]);

  const addClass = (event: React.MouseEvent) => {
    event.preventDefault();
    setClasses([
      ...classes,
      {
        title: "",
        description: "",
        url: "",
      },
    ]);
  };

  const removeClass = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const updatedClasses = [...classes];
    updatedClasses.splice(index, 1);
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
            <Input
              id={`class-title-${index}`}
              name={`class-title-${index}`}
              required
              placeholder={`Título de la clase ${index + 1}.`}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor={`class-description-${index}`} className="font-bold">
              Descripción
            </Label>
            <Textarea
              id={`class-description-${index}`}
              name={`class-description-${index}`}
              required
              placeholder={`Este será la descripción de la clase ${index + 1}.`}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor={`class-url-${index}`} className="font-bold">
              Link de Clase Youtube
            </Label>
            <Input
              id={`class-url-${index}`}
              name={`class-url-${index}`}
              required
              placeholder="www.youtube.com/watch?v=id"
            />
          </div>
          {index > 0 && (
            <Button
              variant="destructive"
              onClick={(event) => removeClass(event, index)}
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
