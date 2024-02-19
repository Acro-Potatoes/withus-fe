'use server'

import { z } from 'zod'

export const signIn = async (formData: FormData) => {
    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    console.log(rawFormData)
}

export const signUp = async (formData: FormData) => {
    const rowFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        userName: formData.get('userName'),
        phone: formData.get('phone'),
    }
    console.log(rowFormData)
}
