import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Email is invalid"),
  password: z.string({ required_error: "Password is required" }).min(4, "short").max(20, "long"),
  remember: z.boolean({ required_error: "Please check!" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
