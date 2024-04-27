"use server";

import { redirect } from "next/navigation";

import { parseWithZod } from "@conform-to/zod";

import { loginSchema } from "~/app/schema";

export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: loginSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect("/success");
}
