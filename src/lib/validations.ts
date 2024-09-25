import { z } from "zod";
import { cursoCategoriaeEnum } from "~/server/db/schema";

export const courseIdSchema = z.string().cuid();

export const courseFormSchema = z.object({
  authorId: z.string(),
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
  category: z.enum(cursoCategoriaeEnum.enumValues),
  price: z.string(),
});

export const moduleSchema = z.object({
  name: z.string(),
  description: z.string(),
  order: z.number(),
  cursoId: z.number(),
  urlVideo: z.string(),
});

export type TCourseForm = z.infer<typeof courseFormSchema>;
