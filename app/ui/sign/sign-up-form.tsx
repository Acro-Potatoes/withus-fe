'use client'

import { signUp } from '#/app/lib/actions'
import { Button } from '#/app/ui/buttons'
import { TextField } from '#/app/ui/inputs'

const SignUpForm = () => {
    return (
        <form action={signUp} className="flex flex-col gap-2">
            <div>
                <label htmlFor="email">이메일</label>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@work-email.com"
                    required
                    autoFocus
                />
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    required
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="password"
                    required
                />
            </div>
            <div>
                <label htmlFor="userName">이름</label>
                <TextField
                    id="userName"
                    name="userName"
                    placeholder="이름을 입력해주세요."
                />
            </div>
            <div>
                <label htmlFor="phone">전화번호</label>
                <TextField
                    id="phone"
                    name="phone"
                    placeholder="'-' 를 제외하고 입력해주세요."
                />
            </div>
            <Button type="submit">계속</Button>
        </form>
    )
}

export default SignUpForm
