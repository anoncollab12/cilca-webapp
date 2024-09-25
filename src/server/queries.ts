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

interface Curso {
  name: FormDataEntryValue | null;
  description: FormDataEntryValue | null;
  urlThumbnail: FormDataEntryValue | null;
  urlTrailer: FormDataEntryValue | null;
  category: FormDataEntryValue | null;
  price: FormDataEntryValue | null;
}
export async function insertFormCourse(courseData: Curso) {
  const userId = auth().userId;
  const validatedCourse = courseFormSchema.safeParse({
    ...courseData,
    authorId: userId,
  });
  if (!validatedCourse.success) {
    throw new Error(
      `Error in course information: ${validatedCourse.error.toString()}`,
    );
  }
  try {
    const [result] = await db
      .insert(cursos)
      .values(validatedCourse.data)
      .returning({ cursosId: cursos.id });
    return result ? result.cursosId : null;
  } catch (error) {
    console.log(error);
  }
}

interface Module {
  name: string;
  description: string;
  order: number;
  cursoId: number;
  urlVideo: string;
}

export async function insertModulo(moduloArray: Module[]) {
  try {
    await db.insert(modulos).values(moduloArray);
  } catch (error) {
    return "Error al crear las clases del curso.";
  }
}
