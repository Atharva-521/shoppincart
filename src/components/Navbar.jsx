import React from "react"
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar(){
    return(
        <div className="bg-slate-900">
            <nav className="flex justify-between max-w-6xl mx-auto items-center h-20">
                <NavLink to="/">
                <div>
                    <img src="../logo.png" className="h-14" />
                </div>
                </NavLink>
                
                <div className="text-white flex items-center">
                <NavLink to="/">
                    <h2 className="">Home</h2>
                </NavLink>
                <NavLink to="/cart" >
                    <MdOutlineShoppingCart />
                </NavLink>    
                </div>
            </nav>  
            
        </div>
    );
}