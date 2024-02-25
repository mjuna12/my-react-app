import { Link } from "react-router-dom";
import Formlogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <Formlogin />
            <p className="text-sm mt-5 text-center">
                Don't have an account?
                <Link to="/register" className="font-bold text-blue-500"> 
                 Sign Up
                </Link></p>
        </AuthLayout>
    )
}

export default LoginPage;