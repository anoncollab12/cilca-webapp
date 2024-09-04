import { z } from "zod";

export const courseIdSchema = z.string().cuid();

export const courseFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "No dejes el titulo vacío" })
    .max(256, { message: "Límite de 256 caracteres" }),
  description: z
    .string()
    .min(1, { message: "No dejes la descripción vacía" })
    .max(256, { message: "Límite de 256 caracteres" }),
  urlThumbnail: z
    .string()
    .min(1, { message: "No dejes el link de imagen vacío" })
    .max(1024, { message: "Límite de 1024 caracteres" }),
  urlTrailer: z
    .string()
    .min(1, { message: "No dejes el link de youtube vacío" })
    .max(1024, { message: "Límite de 1024 caracteres" }),
  price: z.preprocess(
    (val) => Number(val),
    z.number().min(0, { message: "El precio debe ser mayor o igual a 0" }),
  ),
});

export type TCourseForm = z.infer<typeof courseFormSchema>;
