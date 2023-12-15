import { z } from "zod"

export const zodUserSchema = z.object({
    email: z.string().max(254, "Email demasiado grande.").email({message: "Email inválido, insere um email real."}),
    password: 
        z.string()
        .regex(
            /^\S*$/,
            "A palavra-passe não deve conter espaços"
        )
        .regex(
            /^(?=.*\d)(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/, 
            "Deves utilizar números, maiúsculas e caracteres especiais (ex: $,%)."
        )
        .min(8, "A palavra-passe deve conter no mínimo 8 caracteres"),
})

export type TzodUserSchema = z.infer<typeof zodUserSchema>
