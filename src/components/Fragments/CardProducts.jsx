import { Link } from "react-router-dom"
import Button from "../elements/Button"
import { useDispatch } from "react-redux"
import { addTocart } from "../../redux/slices/cartSlice"

const CardProduct = (props) => {
    const {children} = props
    return (
    <div className="w-full max-w-sm bg-slate-50 border border-gray-200 rounded-lg shadow mx-2 flex flex-col justify-between">
        {children}
    </div>
    )
}

const Body = (props) => {
    const {name, children} = props
    return (
        <div className="px-5 pb-5 h-full">
        <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-black">
                {name}
                </h5>
            <p className="text-medium">
                {children.substring(0, 100)}...
                </p>
        </a>
        </div>
    )
}

const Footer = (props) => {
    const {price, id} = props
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold">${" "}
        {price}</span>
        <Button color="bg-blue-500" onClick={() => dispatch(addTocart({id, qty:1})) }>
            Add to Cart
        </Button>
    </div>
    )
}

const Header = (props) => {
    const {image, id} = props
    return (
        <Link to={`/products/${id}`}>
        <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover"/>
    </Link>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct;