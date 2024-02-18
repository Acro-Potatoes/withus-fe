import { GoogleButton } from '#/app/ui/buttons'
import SignInForm from '#/app/ui/sign/sign-in-form'
import Link from 'next/link'

const SignInPage = () => {
    return (
        <main className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold mb-4">Logo</h1>
            <h1 className="text-5xl font-semibold">
                WithUS에 오신 것을 환영합니다!
            </h1>
            <p className="text-lg">
                <span className="font-semibold">
                    그룹에서 사용하는 이메일 주소
                </span>
                로 로그인하는 것을 추천드려요.
            </p>
            <div className="w-[400px]">
                <SignInForm />
                <div className="flex justify-center items-center gap-4">
                    <hr className="h-px w-full border-0 bg-black" />
                    <span className="whitespace-nowrap">또는</span>
                    <hr className="h-px w-full border-0 bg-black" />
                </div>
                <GoogleButton />
            </div>
            <Link href={'/sign/up'} className=''>회원가입</Link>
        </main>
    )
}

export default SignInPage
