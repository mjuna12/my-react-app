import InputForm from "../elements/input";
import Button from "../elements/Button";
const FormRegister = () => {
    return (
        <form action="">
        <InputForm 
        label="Full Name" 
        name="fullname" 
        type="text" 
        placeholder="input your full name" 
        />
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
        <InputForm
        label="Confirm Password"
        name="password"
        type="confirmPassword"
        placeholder="********"
        />
        <Button color="bg-blue-500 w-full">
          Register
        </Button>
      </form>
    )
}

export default FormRegister;