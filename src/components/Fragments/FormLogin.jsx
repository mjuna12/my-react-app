import InputForm from "../elements/input";
import Button from "../elements/Button";

const Formlogin = () => {
  const handleLogin = (event) => {
    // Untuk tidak merefresh halaman saat submit form
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href = '/products'
    console.log('login')
  }
    return (
          <form onSubmit={handleLogin}>
            <InputForm 
            label="Email" 
            name="email" 
            type="email" 
            placeholder="example@mail.com" 
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