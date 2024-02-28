import CardProduct from "../components/Fragments/CardProducts"
import Button from "../components/elements/Button"
import { useEffect, useRef, useState } from "react"
import { getProducts } from "../services/product"
import { getUsername } from "../services/auth"

const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducts] = useState([])
    const [username, setUsername] = useState("")

    // Use Effect => Data Langsung berubah
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, []);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart, products])
    // Get Data
    useEffect(()=>{
        getProducts((data)=>{
            setProducts(data)
        })
    },[])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            setUsername(getUsername(token))
        }else {
            window.location.href = '/login'
        }
        setUsername(getUsername(token))
    }, [])

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    }
// UseRef => Data disimpan dan tidak langsung berubah
    const totalPriceRef = useRef(null)
    useEffect(()=>{
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart])

    return (
        <>
            <div className="flex justify-end h-20 bg-blue-500 text-white px-10 items-center">
                {username}
                <Button color="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap">
                    {products.length > 0 &&
                    products.map((products) => (
                        <CardProduct key={products.id}>
                            <CardProduct.Header image={products.image} />
                            <CardProduct.Body name={products.title}>{products.description}</CardProduct.Body>
                            <CardProduct.Footer price={`${(products.price).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}`} handleAddToCart={handleAddToCart} id={products.id} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-500">Cart</h1>
                    <table className="text-left table-auto border-separate  border-spacing-x-2">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td> {product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                                        <td>{item.qty}</td>
                                        <td>$ {(product.price * item.qty).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                                    </tr>
                                )
                            })}
                            <tr className="font-bold" ref={totalPriceRef}>
                                <td colSpan={3}>Total Price</td>
                                <td>$ {(totalPrice).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ProductsPage