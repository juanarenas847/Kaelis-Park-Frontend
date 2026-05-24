import { AuthLayout } from "../../layouts/AuthLayout";
import { LoginForm } from "../../forms/LoginForm";


export default function Login() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}