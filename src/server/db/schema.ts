// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql, relations } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  numeric,
  integer,
  pgEnum,
  uniqueIndex,
  primaryKey,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `cilca_${name}`);

export const userRoleEnum = pgEnum("user_role", [
  "admin",
  "instructor",
  "student",
]);

export const cursoCategoriaeEnum = pgEnum("curso_categoria", [
  "Arte",
  "Ciencia",
  "Espiritual",
  "Negocios",
  "Idiomas",
  "Cocina",
  "Musica",
  "Deportes",
]);

export const users = createTable(
  "user",
  {
    id: varchar("id", { length: 256 }).primaryKey().notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    role: userRoleEnum("role").notNull(),
    subscription: timestamp("subscription", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (table) => ({
    emailIndex: uniqueIndex("email_idx").on(table.email),
  }),
);

export const usersRelations = relations(users, ({ many }) => ({
  enrollment: many(enrollment),
  cursos: many(cursos),
}));

export const cursos = createTable(
  "curso",
  {
    id: serial("id").primaryKey(),
    authorId: integer("author_id")
      .notNull()
      .references(() => users.id),
    name: varchar("name", { length: 256 }).notNull(),
    urlThumbnail: varchar("urlThumbnail", { length: 1024 }).notNull(),
    urlTrailer: varchar("urlTrailer", { length: 1024 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    category: cursoCategoriaeEnum("category").notNull(),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (table) => ({
    nameIndex: index("name_idx").on(table.name),
    categoryIndex: index("category_idx").on(table.category),
  }),
);

export const cursosRelations = relations(cursos, ({ one, many }) => ({
  author: one(users, {
    fields: [cursos.authorId],
    references: [users.id],
  }),
  enrollment: many(enrollment),
  modulos: many(modulos),
}));

export const modulos = createTable(
  "modulo",
  {
    id: serial("id").primaryKey(),
    cursoId: integer("curso_id")
      .notNull()
      .references(() => cursos.id),
    name: varchar("name", { length: 256 }).notNull(),
    description: varchar("description", { length: 1024 }),
    order: integer("order").notNull(),
    urlVideo: varchar("urlVideo", { length: 1024 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (table) => ({
    courseModuleIndex: index("course_module_idx").on(
      table.cursoId,
      table.order,
    ),
  }),
);

export const modulosRelations = relations(modulos, ({ one }) => ({
  curso: one(cursos, {
    fields: [modulos.cursoId],
    references: [cursos.id],
  }),
}));

export const enrollment = createTable(
  "enrollment",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
    cursoId: integer("curso_id")
      .notNull()
      .references(() => cursos.id),
    enrollmentDate: timestamp("enrollment_date", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    lastAccessDate: timestamp("last_access_date", { withTimezone: true }),
    completionDate: timestamp("completion_date", { withTimezone: true }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.cursoId] }),
  }),
);
export const usersToCoursesRelations = relations(enrollment, ({ one }) => ({
  group: one(cursos, {
    fields: [enrollment.cursoId],
    references: [cursos.id],
  }),
  user: one(users, {
    fields: [enrollment.userId],
    references: [users.id],
  }),
}));
