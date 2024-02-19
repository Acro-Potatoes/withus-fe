import { InputHTMLAttributes } from 'react'

export const TextField = ({
    ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className="peer w-full border border-gray-400 rounded-md py-2 px-4 text-md placeholder:text-gray-400 focus:outline-orange-400 my-2"
            {...rest}
        />
    )
}
