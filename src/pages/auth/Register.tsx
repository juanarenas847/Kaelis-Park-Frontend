import { AuthLayout } from "../../layouts/AuthLayout"
import { RegisterFom } from "../../forms/RegisterFom"

export const Register = () => {
    return (
        <AuthLayout>
            <RegisterFom />
        </AuthLayout>
    )
}
