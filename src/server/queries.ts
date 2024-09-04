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
    await db.insert(cursos).values({
      authorId: "123",
      name: formData.get("name"),
      urlThumbnail: formData.get("urlThumbnail"),
      urlTrailer: formData.get("urlTrailer"),
      description: formData.get("description"),
      category: "Arte",
      price: formData.get("price"),
    });
  } catch (error) {
    return { message: "Error creando curso." };
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
    return error("Error inserting curso:", error);
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
  const module = await db.insert(modulos).values({
    cursoId: cursoId,
    name: name,
    description: description,
    urlVideo: urlVideo,
    order: order,
  });
  return module;
}
