import { useLogin } from "../../hooks/useLogin"
import Button from "../elements/Button"
import { Link } from "react-router-dom"

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    const username = useLogin()

    return (
        <header className="flex items-center justify-between px-10 py-5 bg-blue-500 text-white">
            <div className="flex items-center space-x-2">
                <h1 className="text-lg font-semibold">My React Store</h1>
            </div>

            <nav className="flex items-center space-x-4">
                <Link to="/" className="text-white hover:underline">Home</Link>
                <Link to="/products" className="text-white hover:underline">Products</Link>
                <Link to="/profile" className="text-white hover:underline">Profile</Link>

                <div className="flex items-center space-x-2">
                    <span>{username.toUpperCase()}</span>
                    <Button className="ml-5 bg-black text-white px-4 py-2 rounded" onClick={handleLogout}>Logout</Button>
                </div>
            </nav>
        </header>
    )
}

export default Header;