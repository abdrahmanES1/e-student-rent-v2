"use server";

import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function login(
  prevState: { message: string; type: "success" | "error" | "init" },
  formData: FormData
): Promise<{ message: string; type: "success" | "error" | "init" }> {
  try {
    
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return { message: "", type: "success" };
    // redirect("/");
  } catch (error) {
    return { message: "Invalid credentials", type: "error" };
  }
}
