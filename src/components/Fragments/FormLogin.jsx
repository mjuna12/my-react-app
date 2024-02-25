import InputForm from "../elements/input";
import Button from "../elements/Button";

const Formlogin = () => {
    return (
          <form action="">
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
            <Button color="bg-blue-500 w-full">
              Login
            </Button>
          </form>
    )

}

export default Formlogin;