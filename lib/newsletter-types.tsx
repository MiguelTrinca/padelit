import { z } from "zod";

// My types
export const subSchema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres.").max(100, "Nome é demasiado grande."),
    email: z.string().max(254, "Email demasiado grande.").email({message: "Email inválido, insira um email real."}),
})

export type TSubSchema = z.infer<typeof subSchema>;