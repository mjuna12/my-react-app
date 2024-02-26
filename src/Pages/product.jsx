import CardProduct from "../components/Fragments/CardProducts"
import Button from "../components/elements/Button"

const products = [
    {
        id: 1,
        title: "Macbook Pro M1",
        price: 5000,
        image: "images/macbook.png",
        description: "Hello I am from Cildren"
    },
    {
        id: 2,
        title: "Macbook Pro M1",
        price: 5000,
        image: "images/macbook.png",
        description: "Hello I am from Cildren"
    }
]

const ProductsPage = () => {
    const email = localStorage.getItem('email')
    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    return (
        <>
        <div className="flex justify-end h-20 bg-blue-500 text-white px-10 items-center">
            <p>{email}</p>
            <Button color="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
        </div>
        <div className="flex justify-center py-5">
        <div className="w-3/4">
        {products.map((products)=>(
                    <CardProduct key={products.id}>
                    <CardProduct.Header image={products.image}/>
                    <CardProduct.Body title={products.name}>{products.description}</CardProduct.Body>
                    <CardProduct.Footer price={`$${products.price}`}/>
                    </CardProduct>
            ))}
        </div>
        </div>
        </>
    )
}
export default ProductsPage