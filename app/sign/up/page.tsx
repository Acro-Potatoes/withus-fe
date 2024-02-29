import { signUp } from '#/app/lib/actions/authActions'
import SignUpForm from '#/app/ui/sign/sign-up-form'

export default function SignUpPage() {
    return (
        <main className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold mb-4">Logo</h1>
            <h1 className="text-5xl font-semibold">
                WithUS에서 사용할 계정 만들기
            </h1>
            <p className="text-xl">
                <span className="font-semibold">
                    그룹에서 사용하는 이메일 주소
                </span>
                를 사용하시는 것을 추천드려요.
            </p>
            <div className="w-[400px]">
                <SignUpForm signUp={signUp} />
            </div>
        </main>
    )
}
