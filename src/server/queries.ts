"use server";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { cursos, modulos } from "./db/schema";
import { courseFormSchema } from "~/lib/validations";
import { and, count, eq } from "drizzle-orm";

export async function getCourse(id: number) {
  const curso = await db.query.cursos.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!curso) {
    throw new Error("Curso no encontrado");
  }
  return curso;
}

export async function getNumberOfModules(idCurso: number) {
  try {
    const result = await db
      .select({
        moduloCount: count(modulos.id),
      })
      .from(modulos)
      .where(eq(modulos.cursoId, idCurso));
    const number = result[0]?.moduloCount ?? -1;
    return number;
  } catch (e) {
    return -1;
  }
}

export async function getModulo(idCurso: number, order: number) {
  const result = await db.query.modulos.findFirst({
    where: (modulo, { eq }) =>
      and(eq(modulo.cursoId, idCurso), eq(modulo.order, order)),
  });
  console.log(result);
  if (!result) {
    throw new Error("Modulo no encontrado");
  }
  return result;
}

export async function getAuthorName(id: string) {
  const author = await db.query.users.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!author) {
    throw new Error("Autor no encontrado");
  }
  return author.name;
}

export async function getUserRole() {
  const { userId } = auth();
  const user = await db.query.users.findFirst({
    where: (model, { eq }) => eq(model.id, userId!),
  });

  if (!user) {
    return null;
  }
  return user.role;
}

export async function insertFormCourse(formData: FormData) {
  const { userId }: { userId: string | null } = auth();
  const parsedData = {
    ...Object.fromEntries(formData.entries()),
    authorId: userId,
  };
  const validatedData = courseFormSchema.safeParse(parsedData);
  if (!validatedData.success) {
    return `Error en información del curso: ${validatedData.error.toString()}`;
  }
  try {
    await db.insert(cursos).values(validatedData.data);
  } catch (error) {
    return `No se pudo agregar curso: ${(error as Error).message}`;
  }
}

export async function insertModulo(
  name: string,
  cursoId: number,
  description: string,
  order: number,
  urlVideo: string,
) {
  const newmodule = await db.insert(modulos).values({
    cursoId: cursoId,
    name: name,
    description: description,
    urlVideo: urlVideo,
    order: order,
  });
  return newmodule;
}
