"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { updateVideoClass } from "./actions";

interface ModuleVideoProps {
  initialData: {
    title: string;
  };
  moduleId: number;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Necesitas agregar un link de youtube.",
  }),
});

export const ModuleVideo = ({ initialData, moduleId }: ModuleVideoProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await updateVideoClass(moduleId, values.title);
      toast.success("Link de youtube actualizado");
      toggleEdit();
      router.refresh();
      window.location.reload();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("No se pudo realizar la acción.");
      }
    }
  };

  return (
    <div className="mt-6 rounded-md bg-slate-100 p-4 dark:bg-gray-800">
      <div className="flex items-center justify-between font-medium">
        Link de Clase Youtube
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancelar</>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Editar
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <iframe
          className="h-64 w-full"
          src={`https://www.youtube.com/embed/${initialData?.title.slice(-11)}?si=draVAGR-JHfe_lvO&amp;controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4 dark:text-gray-300"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="ejemplo: https://www.youtube.com/watch?v=..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Guardar
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
