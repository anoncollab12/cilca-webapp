import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

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
