"use server";

import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { cursos } from "~/server/db/schema";
import { modulos } from "~/server/db/schema";

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

export async function updateTitleClass(id: number, name: string) {
  const clase = await db
    .update(modulos)
    .set({ name: name })
    .where(eq(modulos.id, id));

  if (!clase) {
    throw new Error("Clase no encontrada");
  }
}

export async function updateDescriptionClass(id: number, description: string) {
  const clase = await db
    .update(modulos)
    .set({ description: description })
    .where(eq(modulos.id, id));

  if (!clase) {
    throw new Error("Clase no encontrada");
  }
}

export async function updateVideoClass(id: number, urlVideo: string) {
  const clase = await db
    .update(modulos)
    .set({ urlVideo: urlVideo })
    .where(eq(modulos.id, id));

  if (!clase) {
    throw new Error("Clase no encontrada");
  }
}

export async function getClassId(order: number) {
  const clase = await db.query.modulos.findFirst({
    where: (model, { eq }) => eq(model.order, order),
  });
  if (!clase) {
    throw new Error("Clase no encontrada");
  }
  return clase.id;
}

export async function deleteClass(id: number) {
  const clase = await db.delete(modulos).where(eq(modulos.id, id));
  if (!clase) {
    throw new Error("Clase no encontrada");
  }
}
