'use client'

import { signUp } from '#/app/lib/actions/authActions'
import { Button } from '#/app/ui/buttons'
import { FormField, TextField } from '#/app/ui/inputs'
import { useForm } from 'react-hook-form'

export type SignUpFormData = {
    email: string
    password: string
    confirmPassword: string
    userName: string
    phone: number
}

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>()
    return (
        <form action={signUp} className="flex flex-col gap-2">
            <div>
                <label htmlFor="email">이메일</label>
                <FormField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@work-email.com"
                    required
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
                    required
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
                    required
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
                    required
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

export default SignUpForm
