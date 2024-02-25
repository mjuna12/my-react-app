import CardProduct from "../components/Fragments/CardProducts"
const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
            <CardProduct.Header image="images/macbook.png"/>
            <CardProduct.Body title="Macbook Pro M1">Hello I am from Cildren</CardProduct.Body>
            <CardProduct.Footer price="$5000"/>
            </CardProduct>
        </div>
    )
}
export default ProductsPage