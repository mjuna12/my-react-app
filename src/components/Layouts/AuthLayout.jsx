import { Link } from "react-router-dom";
const AuthLayout = (props)=> {
    const { children, title,type } = props;
 return (
  <div className="flex justify-center min-h-screen items-center">
    <div className='w-full max-w-xs'>
        <h1 className='font-bold text-3xl text-blue-500 mb-2'>{title}</h1>
        <p className='font-medium text-slate-500 mb-8'>
          Welcome, Please enter your details!
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
            {type === 'login' ? "Don't have an account?" 
                            : "Already have an account?"}
                {type === "login" &&
                <Link to="/register" className="font-bold text-blue-500"> 
                {" "}Register
                </Link>}
                {type === "register" &&
                <Link to="/register" className="font-bold text-blue-500"> 
                {" "}Login
                </Link>}
        </p>                
      </div>
  </div>
 )
}

export default AuthLayout;