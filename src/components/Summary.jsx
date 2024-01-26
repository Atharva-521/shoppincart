import { useSelector } from "react-redux";

export default function Summary(){
    const cart = useSelector((state) => state.cart);
    const length = cart.length;
    const totalPrice = cart.reduce((acc,val) => acc + val.price , 0);
    return(
        <div>
            <div>
                <div>
                    <p>Your Cart</p>
                    <h1>Summary</h1> 
                </div>
                <p>Total Items:{length}</p>
            </div>

            <div>
                <p>Total Amount:${totalPrice}</p>
            </div>
        </div>
    )
}