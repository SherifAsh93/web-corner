"use server"; // This tells Next.js: "Run this code ONLY on the server"

import { db } from "@/db"; // Use the @/ shortcut for the root
import { leads } from "@/db/schema";

export async function submitLead(formData: FormData) {
  // 1. Get the data from the form
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const projectType = formData.get("projectType") as string;
  const message = formData.get("message") as string;

  try {
    // 2. Use Drizzle to insert it into the database
    await db.insert(leads).values({
      name,
      email,
      projectType,
      message,
    });

    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false };
  }
}
