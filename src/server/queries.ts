"use server";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { type cursoCategoriaeEnum, cursos, modulos } from "./db/schema";

export async function getCourse(id: number) {
  const curso = await db.query.cursos.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!curso) {
    throw new Error("Curso no encontrado");
  }
  return curso;
}

export async function getModulo(id: number) {
  const modulo = await db.query.modulos.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!modulo) {
    throw new Error("Modulo no encontrado");
  }
  return modulo;
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

export async function insertFormCourse(formData: FormData) {
  try {
    const newCourse = {
      authorId: "123" as string,
      name: formData.get("name") as string,
      urlThumbnail: formData.get("urlThumbnail") as string,
      urlTrailer: formData.get("urlTrailer") as string,
      description: formData.get("description") as string,
      category: "Arte" as (typeof cursoCategoriaeEnum.enumValues)[number],
      price: formData.get("price") as string,
    };

    const insertedCourse = await db
      .insert(cursos)
      .values(newCourse)
      .returning();
    return insertedCourse[0];
  } catch (error) {
    console.error("Error inserting course:", error);
    throw error;
  }
}

export async function insertCourse(
  authorId: string,
  name: string,
  urlThumbnail: string,
  urlTrailer: string,
  description: string,
  category: (typeof cursoCategoriaeEnum.enumValues)[number],
  price: string,
) {
  try {
    await db.insert(cursos).values({
      authorId: authorId,
      name: name,
      urlThumbnail: urlThumbnail,
      urlTrailer: urlTrailer,
      description: description,
      category: category,
      price: price,
    });
  } catch (error) {
    console.error("Error inserting course:", error);
    throw error;
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
