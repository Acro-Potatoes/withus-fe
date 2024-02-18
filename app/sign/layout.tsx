import { ReactNode } from 'react'

const SignLayout = ({ children }: { children: ReactNode }) => {
    return <div className="flex justify-center mt-40">{children}</div>
}

export default SignLayout
