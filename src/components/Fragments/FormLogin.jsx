import InputForm from "../elements/input";
import Button from "../elements/Button";
import { useEffect, useRef, useState } from "react";
import { getUsername, login } from "../../services/auth";

const Formlogin = () => {
  const [loginFailed, setloginFailed] = useState()
  const handleLogin = (event) => {
    // Untuk tidak merefresh halaman saat submit form
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value)
    // localStorage.setItem('password', event.target.password.value)
    // window.location.href = '/products'
    // console.log('login')
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res)=>{
      if(status === true){
        localStorage.setItem('token', res)
        window.location.href = '/products'
      } else {
        setloginFailed(res.response.data)
      }
    });
  }
  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  }, [])
    return (
          <form onSubmit={handleLogin}>
            <InputForm 
            label="Username" 
            name="username" 
            type="text" 
            placeholder="Jhon doe" 
            ref={usernameRef }
            />
            <InputForm
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            />
            <Button color="bg-blue-500 w-full" type="submit">
              Login
            </Button>
            {loginFailed && <p className="text-red-500 flex justify-center m-4">{loginFailed}</p>}
          </form>
    )

}

export default Formlogin;