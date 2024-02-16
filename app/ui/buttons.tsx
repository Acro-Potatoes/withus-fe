import Image from 'next/image'
import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            className="w-full bg-orange-600 p-2 rounded-md text-white my-4 shadow-lg transition hover:shadow-xl hover:bg-orange-500 active:bg-orange-400"
        >
            {children}
        </button>
    )
}

export const GoogleButton = () => {
    return (
        <button
            type="button"
            className="flex justify-center items-center gap-4 w-full p-2 border rounded-md my-4 shadow-lg transition hover:shadow-xl active:bg-gray-200"
        >
            <Image
                src="/google-logo.svg"
                width={18}
                height={18}
                alt="google sign in button"
            />
            Google로 계속
        </button>
    )
}
