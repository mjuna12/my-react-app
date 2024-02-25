import Button from "../elements/Button"
const CardProduct = (props) => {
    const {children} = props
    return (
    <div className="w-full max-w-sm bg-slate-50 border border-gray-200 rounded-lg shadow mx-2">
        {children}
    </div>
    )
}

const Body = (props) => {
    const {title, children} = props
    return (
        <div className="px-5 pb-5">
        <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-black">
                {title}
                </h5>
            <p className="text-medium">
                {children}
                </p>
        </a>
        </div>
    )
}

const Footer = (props) => {
    const {price} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold">{price}</span>
        <Button color="bg-blue-500">
            Add to Cart 
        </Button>
    </div>
    )
}

const Header = (props) => {
    const {image} = props
    return (
        <a href="">
        <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct;