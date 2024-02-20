'use client'

import { InputHTMLAttributes, useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { SignUpFormData } from '#/app/ui/sign/sign-up-form'

export const TextField = ({
    ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <div
            className={clsx(
                'group w-full border border-gray-400 rounded-md py-2 px-4 my-2',
                { 'border-orange-400': isFocus },
            )}
        >
            <input
                className="w-full text-md placeholder:text-gray-400 outline-0"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                {...rest}
            />
        </div>
    )
}

interface FormFieldType extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<SignUpFormData>
    error: FieldError | undefined
    name: 'email' | 'password' | 'confirmPassword' | 'userName' | 'phone'
}

export const FormField = ({
    name,
    register,
    error,
    ...rest
}: FormFieldType) => {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <div
            className={clsx(
                'group w-full border border-gray-400 rounded-md py-2 px-4 my-2',
                { 'border-orange-400': isFocus },
            )}
        >
            <input
                className="w-full text-md placeholder:text-gray-400 outline-0"
                {...register(name)}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                {...rest}
            />
        </div>
    )
}

export const ValidTextField = ({
    ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <div
            className={clsx(
                'group flex justify-between items-center gap-2 w-full border border-gray-400 rounded-md py-2 px-4 my-2',
                { 'border-orange-400': isFocus },
            )}
        >
            <input
                className="w-full text-md placeholder:text-gray-400 outline-0"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                {...rest}
            />
            <CheckIcon className="text-green-500" />
        </div>
    )
}
