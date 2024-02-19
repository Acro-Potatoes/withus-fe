import { ReactNode } from 'react'

const SignLayout = ({ children }: { children: ReactNode }) => {
    return <div className="flex justify-center mt-28">{children}</div>
}

export default SignLayout
