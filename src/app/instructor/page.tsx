import { auth } from "@clerk/nextjs/server";
import CourseForm from "../_components/CourseForm";
import { redirect } from "next/navigation";

export default function Instructor() {
  const { sessionClaims } = auth();
  if (
    sessionClaims?.metadata.role !== "instructor" &&
    sessionClaims?.metadata.role !== "admin"
  ) {
    redirect("/");
  }
  return <CourseForm />;
}
