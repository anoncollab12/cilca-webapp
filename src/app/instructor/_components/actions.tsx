"use server";

import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { cursos } from "~/server/db/schema";

export async function updateTitleCourse(id: number, name: string) {
  const curso = await db
    .update(cursos)
    .set({ name: name })
    .where(eq(cursos.id, id));

  if (!curso) {
    throw new Error("Curso no encontrado");
  }
}

export async function updateDescriptionCourse(id: number, description: string) {
  const curso = await db
    .update(cursos)
    .set({ description: description })
    .where(eq(cursos.id, id));

  if (!curso) {
    throw new Error("Curso no encontrado");
  }
}

export async function updateTrailerCourse(id: number, urlTrailer: string) {
  const curso = await db
    .update(cursos)
    .set({ urlTrailer: urlTrailer })
    .where(eq(cursos.id, id));

  if (!curso) {
    throw new Error("Curso no encontrado");
  }
}

export async function updateImageCourse(id: number, urlThumbnail: string) {
  const curso = await db
    .update(cursos)
    .set({ urlThumbnail: urlThumbnail })
    .where(eq(cursos.id, id));

  if (!curso) {
    throw new Error("Curso no encontrado");
  }
}

export async function updatePriceCourse(id: number, price: string) {
  const curso = await db
    .update(cursos)
    .set({ price: price })
    .where(eq(cursos.id, id));

  if (!curso) {
    throw new Error("Curso no encontrado");
  }
}
