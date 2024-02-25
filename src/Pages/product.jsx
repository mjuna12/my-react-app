import CardProduct from "../components/Fragments/CardProducts"

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
    return (
        <div className="flex justify-center py-5">
            {products.map((products)=>{
                return (
                    <CardProduct key={products.id}>
                    <CardProduct.Header image={products.image}/>
                    <CardProduct.Body title={products.name}>{products.description}</CardProduct.Body>
                    <CardProduct.Footer price={`$${products.price}`}/>
                    </CardProduct>
                )
            })}
        </div>
    )
}
export default ProductsPage