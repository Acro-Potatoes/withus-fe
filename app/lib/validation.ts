import { SignUpFormData } from '#/app/ui/sign/type'
import { ZodType, z } from 'zod'

export const SignUpSchema: ZodType<SignUpFormData> = z
    .object({
        email: z.string().email({ message: '올바른 이메일을 작성해 주세요.' }),
        password: z
            .string()
            .min(8, { message: '비밀번호는 8~20자 이내로 작성해 주세요.' })
            .max(20, { message: '비밀번호는 8~20자 이내로 작성해 주세요.' }),
        confirmPassword: z.string(),
        userName: z.string().min(2, { message: '이름이 너무 짧습니다.' }),
        phone: z
            .string()
            .regex(/^010([0-9]{7,8}$)/, '올바른 전화번호를 작성해 주세요.'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: '동일한 비밀번호를 작성해 주세요.',
        path: ['confirmPassword'],
    })
