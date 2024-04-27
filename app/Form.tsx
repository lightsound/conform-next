"use client";

import { useActionState } from "react";

import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";

import { login } from "~/app/actions";
import { loginSchema } from "~/app/schema";

export function LoginForm() {
  const [lastResult, action, pending] = useActionState(login, undefined);
  const [form, fields] = useForm({
    constraint: getZodConstraint(loginSchema),
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
  });

  return (
    <form {...getFormProps(form)} action={action} className="space-y-4">
      <div>
        <label htmlFor={fields.email.id}>Email</label>
        <input {...getInputProps(fields.email, { type: "email" })} />
        <div id={fields.email.errorId}>{fields.email.errors}</div>
      </div>

      <div>
        <label htmlFor={fields.password.id}>Password</label>
        <input {...getInputProps(fields.password, { type: "password" })} />
        <div id={fields.password.errorId}>{fields.password.errors}</div>
      </div>

      <div>
        <label htmlFor={fields.remember.id}>Remember me</label>
        <input {...getInputProps(fields.remember, { type: "checkbox" })} />
        <div id={fields.remember.errorId}>{fields.remember.errors}</div>
      </div>

      <button className="border" disabled={pending}>
        Login
      </button>
    </form>
  );
}
