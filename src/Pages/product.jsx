import CardProduct from "../components/Fragments/CardProducts"
import Button from "../components/elements/Button"
import { useEffect, useState } from "react"
const products = [
    {
        id: 1,
        title: "ASUS Zenbook",
        price: 50000,
        image: "images/laptop.jpg",
        description: "Dexcription for ASUS Zenbook"
    },
    {
        id: 2,
        title: "Acer Swift",
        price: 100000,
        image: "images/laptop.jpg",
        description: "Description for Acer Swift"
    },
    {
        id: 3,
        title: "Macbook Pro M1",
        price: 40000,
        image: "images/laptop.jpg",
        description: "Description for M1"        
    }
]

const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem(cart)) || [])
    }, []);
    

    useEffect(()=>{
        if (cart.length > 0){
            const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
        }, 0);
        setTotalPrice(sum)  
        localStorage.setItem(cart, JSON.stringify(cart))
        }
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    const email = localStorage.getItem('email')

    const handleAddToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }
    return (
        <>
        <div className="flex justify-end h-20 bg-blue-500 text-white px-10 items-center">
            <p>{email}</p>
            <Button color="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
        </div>
        <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
        {products.map((products)=>(
                    <CardProduct key={products.id}>
                    <CardProduct.Header image={products.image}/>
                    <CardProduct.Body title={products.name}>{products.description}</CardProduct.Body>
                    <CardProduct.Footer price={`${(products.price).toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}`} handleAddToCart={handleAddToCart} id={products.id}/>
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
                { cart.map((item)=>{
                        const product = products.find(
                            (product) => product.id === item.id);
                        return (
                            <tr key={item.id}>
                                <td>{product.title}</td>
                                <td> {product.price.toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}</td>
                                <td>{item.qty}</td>
                                <td>Rp. {(product.price * item.qty).toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}</td>
                            </tr>
                        )
                    })}
                    <tr className="font-bold">
                        <td colSpan={3}>Total Price</td>
                        <td>Rp. {(totalPrice).toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}
export default ProductsPage