import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode)
  }
  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className='w-full max-w-xs'>
        {/* <button className="absolute right-2 top-2 bg-blue-500 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light": "Dark"}
      </button> */}
        <button className="absolute right-2 top-2 bg-blue-500 p-2 rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <CiLight
            size={30}
            color="white"
          /> : <CiDark
            size={30}
            color="white"
          />}
        </button>
        <h1 className='font-bold text-3xl text-blue-500 mb-2'>{title}</h1>
        <p className={`font-medium text-slate-500 mb-8 ${DarkMode && "text-white"}`}>
          Welcome, Please enter your details!
        </p>
        {children}
        <p className={`text-sm mt-5 text-center  ${DarkMode && "text-white"}`}>
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