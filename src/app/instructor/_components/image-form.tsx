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
import { updateImageCourse } from "./actions";

interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Necesitas agregar un link de imagen.",
  }),
});

export const ImageForm = ({ initialData, courseId }: TitleFormProps) => {
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
      await updateImageCourse(parseInt(courseId), values.title);
      toast.success("Titulo de curso actualizado");
      toggleEdit();
      router.refresh();
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
        Link de Imagen Thumbnail
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
        <>
          <div className="relative mt-2 aspect-video">
            <img
              alt="Upload"
              fill
              className="rounded-md object-cover"
              src={initialData.title}
            />
          </div>
        </>
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
                      placeholder="ejemplo: Baile de salsa"
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
