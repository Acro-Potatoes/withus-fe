import { ZodType, z } from 'zod'

export type SignUpFormData = {
    email: string
    password: string
    confirmPassword: string
    userName: string
    phone: number
}

export const SignUpSchema: ZodType<SignUpFormData> = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .min(8, { message: 'Password is too short' })
            .max(20, { message: 'Password is too long' }),
        confirmPassword: z.string(),
        userName: z.string().min(2, { message: 'is too short' }),
        phone: z.number(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })
