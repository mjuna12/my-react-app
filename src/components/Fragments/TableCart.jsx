import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPrice";

const TableCart = (props) => {  
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const dispatch = useTotalPriceDispatch ();
    const {total} = useTotalPrice();
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            dispatch({
                type: "UPDATE",
                payload: {
                    total: sum,
                },
            })
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart, products])

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
                <td>$ {(total).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
            </tr>
        </tbody>
    </table>
    )
}

export default TableCart;