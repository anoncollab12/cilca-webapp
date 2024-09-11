export {};

export type Roles = "admin" | "instructor" | "student";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
