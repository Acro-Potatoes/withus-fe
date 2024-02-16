import { Button } from '#/app/ui/buttons'
import { TextField } from '#/app/ui/inputs'

const SignInForm = () => {
    return (
        <form>
            <TextField
                name="email"
                type="email"
                placeholder="name@work-email.com"
            />
            <TextField name="password" type="password" placeholder="password" />
            <Button type="submit">계속</Button>
        </form>
    )
}

export default SignInForm
