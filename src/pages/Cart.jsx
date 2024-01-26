import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Summary from "../components/Summary";
import CartItems from "../components/CartItems";

export default function Cart(){
    const cart = useSelector((state) => state.cart);

    if(cart.length === 0){
        return(
            <div>
                <h2>Your Cart is empty!</h2>
                <NavLink to='/'>
                    <button>
                        Shop Now
                    </button>
                </NavLink>
            </div>
        )
    }

    return(
        <div>
            <CartItems  />
            <Summary  />
        </div>
    )
}