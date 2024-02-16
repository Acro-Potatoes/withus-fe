export const signIn = async (formData: FormData) => {
    'use server'
    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    console.log(rawFormData)
}
