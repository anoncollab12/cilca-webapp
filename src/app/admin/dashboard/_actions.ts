"use server";
import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { checkRole } from "~/lib/roles";

export async function setRole(formData: FormData) {
  if (!checkRole("admin")) {
    return { message: "Not Authorized" };
  }

  try {
    const userId = formData.get("id") as string;
    const update = await clerkClient().users.updateUser(userId, {
      publicMetadata: { role: formData.get("role") },
    });
    revalidatePath("/admin/dashboard");
    return { message: update.publicMetadata };
  } catch (err) {
    return { message: err };
  }
}
