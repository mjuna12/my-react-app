import CardProduct from "../components/Fragments/CardProducts"
import { useEffect, useRef, useState } from "react"
import { getProducts } from "../services/product"
import TableCart from "../components/Fragments/TableCart"
import Header from "../components/general/header"
import { DarkMode } from "../context/DarkMode"
import { useContext } from "react"

const ProductsPage = () => { 
    const [products, setProducts] = useState([]) 
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)   
    // Get Data
    useEffect(()=>{
        getProducts((data)=>{
            setProducts(data)
        })
    },[])

    return (
        <>
            <Header/>
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap">
                    {products.length > 0 &&
                    products.map((products) => (
                        <CardProduct key={products.id}>
                            <CardProduct.Header image={products.image} id={products.id}/>
                            <CardProduct.Body name={products.title}>{products.description}</CardProduct.Body>
                            <CardProduct.Footer price={`${(products.price).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}`} id={products.id} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-500">Cart</h1>
                        <TableCart products={products} />
                </div>
            </div>
        </>
    )
}
export default ProductsPage