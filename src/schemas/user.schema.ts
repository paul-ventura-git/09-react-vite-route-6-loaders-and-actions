import { z } from "zod";

export const userSchema = z.object({
  id: z.union([z.string(), z.number()]),
  firstName: z.string(),
  lastName: z.string(),
});

export type User = z.infer<typeof userSchema>;
