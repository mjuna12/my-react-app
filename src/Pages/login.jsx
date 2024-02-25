
import Formlogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <Formlogin />
           
        </AuthLayout>
    )
}

export default LoginPage;