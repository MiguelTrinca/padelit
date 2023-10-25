import { z } from "zod";

// My types
export const subSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().max(254, "Email too long").email({message: "Invalid email, introduce a real email"}),
})

export type TSubSchema = z.infer<typeof subSchema>;
