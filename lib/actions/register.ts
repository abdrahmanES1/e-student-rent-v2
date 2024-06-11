"use server"

import { saltAndHashPassword } from "@/utils/password"

import { db } from "@/lib/db"

export default async function register(
  prevState: { message: string; type: "success" | "error" | "init" },
  formData: FormData
): Promise<{ message: string; type: "success" | "error" | "init" }> {
  try {
    const user = await db.user.findUnique({
      where: {
        email: formData.get("email") as string,
      },
    })
    if (user) {
      return { message: "User already exist", type: "error" }
    }
    let hasedpass = await saltAndHashPassword(
      formData.get("password") as string
    )

    const newuser = {
      name: formData.get("name") as string,
      password: hasedpass,
      email: formData.get("email") as string,
    }

    await db.user.create({ data: newuser })
    return {
      message: "",
      type: "success",
    }
  } catch (error) {
    return { message: error as string, type: "error" }
  }
}
