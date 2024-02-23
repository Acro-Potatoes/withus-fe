'use client'

import { signIn } from '#/app/lib/actions/authActions'
import { Button } from '#/app/ui/buttons'

const SignInForm = () => {
    return (
        <form action={signIn}>
            {/* <TextField
                name="email"
                type="email"
                placeholder="name@work-email.com"
                required
                autoFocus
            />
            <TextField
                name="password"
                type="password"
                placeholder="password"
                required
            /> */}
            <Button type="submit">시작하기</Button>
        </form>
    )
}

export default SignInForm
