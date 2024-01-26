import CartCard from "./CartCard";
import { useSelector } from "react-redux";


export default function CartItems(){
    const cart = useSelector((state) => state.cart);


    return(
        <div>
            {
                cart.map((item) => <CartCard item={item} key={item.id} />)
            }
        </div>
    )
}