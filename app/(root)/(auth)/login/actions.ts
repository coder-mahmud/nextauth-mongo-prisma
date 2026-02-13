"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"


export async function loginAction(values: unknown) {
  try {
    const { email, password } = values as any

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    return { ok: true }
  } catch (err) {
    if (err instanceof AuthError) {
      return { ok: false, error: "Invalid email or password" }
    }
    return { ok: false, error: "Something went wrong" }
  }
}
