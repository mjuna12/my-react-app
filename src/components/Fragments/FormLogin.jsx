import InputForm from "../elements/input";
import Button from "../elements/Button";
import { useEffect, useRef } from "react";

const Formlogin = () => {
  const handleLogin = (event) => {
    // Untuk tidak merefresh halaman saat submit form
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href = '/products'
    console.log('login')
  }
  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current.focus()
  }, [])
    return (
          <form onSubmit={handleLogin}>
            <InputForm 
            label="Email" 
            name="email" 
            type="email" 
            placeholder="example@mail.com" 
            ref={emailRef }
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
          </form>
    )

}

export default Formlogin;