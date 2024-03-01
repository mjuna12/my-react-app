import { useLogin } from "../../hooks/useLogin"
import Button from "../elements/Button"
import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaReact } from "react-icons/fa";

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data);
    useEffect(()=>{
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        
        }, 0);
        setTotalCart(sum);
    }, [cart])

    return (
        <header className="flex items-center justify-between px-10 py-5 bg-blue-500 text-white">
            <div className="flex items-center space-x-2">
            <FaReact 
            size={30}
            />
                <h1 className="text-lg font-semibold">My React Store</h1>
            </div>

            <nav className="flex items-center space-x-4">
                <Link to="/" className="text-white hover:underline">Home</Link>
                <Link to="/products" className="text-white hover:underline">Products</Link>
                <Link to="/profile" className="text-white hover:underline">Profile</Link>

                <div className="flex items-center space-x-2">
                    <span>{username.toUpperCase()}</span>
                </div>
                <div className="flex items-center ml-5">
                    <FaCartShopping
                        size={30}
                        color="white"
                    />
                    {cart.length > 0 && 
                    <div className="absolute bg-red-500 text-xs rounded-full p-1 top-8">
                        {totalCart}
                    </div>}
                </div>
                <Button onClick={handleLogout}>Logout</Button>
            </nav>
        </header>
    )
}

export default Header;