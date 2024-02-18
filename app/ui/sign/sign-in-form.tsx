import { signIn } from '#/app/lib/actions'
import { Button } from '#/app/ui/buttons'
import { TextField } from '#/app/ui/inputs'

const SignInForm = () => {
    return (
        <form action={signIn}>
            <TextField
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
            />
            <Button type="submit">시작하기</Button>
        </form>
    )
}

export default SignInForm
