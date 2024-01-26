import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { add,remove } from "../Redux/Slice/cartSlice";

export default function ProductCard({item}){
    const {title,price,description,image} = item;
    const cart = useSelector((state) => (state.cart))
    const dispatch = useDispatch();
    console.log(`includes: ${cart.includes(item)}`)
    
    
    
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} />
            
            <div>
                <p>${price}</p>

                {
                    cart.includes(item) ? (<button onClick={() => {
                        dispatch(remove(item.id))
                        console.log(cart)}}>
                        Remove Item
                    </button>) : (<button onClick={() => {
                        console.log("added")
                        dispatch(add(item))}}>
                        Add To Cart
                    </button>)

                    
                }
                
            </div>
        </div>
    )
}