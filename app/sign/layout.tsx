import { ReactNode } from 'react'

const SignLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex justify-center items-center h-dvh">{children}</div>
    )
}

export default SignLayout
