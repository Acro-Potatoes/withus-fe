'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '#/app/ui/buttons'
import { FormField } from '#/app/ui/inputs'
import { SignUpFormData } from '#/app/ui/sign/type'
import { SignUpSchema } from '#/app/lib/validation'

export default function SignUpForm({
    signUp,
}: {
    signUp: (formData: FormData) => void
}) {
    const {
        register,
        formState: { isValid, errors },
    } = useForm<SignUpFormData>({ resolver: zodResolver(SignUpSchema) })

    return (
        // <form onSubmit={handleSubmit(signUp)} className="flex flex-col gap-2">
        <form action={signUp} className="flex flex-col gap-2">
            <div>
                <label htmlFor="email">이메일</label>
                <FormField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@work-email.com"
                    autoFocus
                    register={register}
                    error={errors.email}
                />
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <FormField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    register={register}
                    error={errors.password}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <FormField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="password"
                    register={register}
                    error={errors.confirmPassword}
                />
            </div>
            <div>
                <label htmlFor="userName">이름</label>
                <FormField
                    id="userName"
                    name="userName"
                    placeholder="이름을 입력해주세요."
                    register={register}
                    error={errors.userName}
                />
            </div>
            <div>
                <label htmlFor="phone">전화번호</label>
                <FormField
                    id="phone"
                    name="phone"
                    placeholder="'-' 를 제외하고 입력해주세요."
                    register={register}
                    error={errors.phone}
                />
            </div>
            <Button type="submit">계속</Button>
        </form>
    )
}
