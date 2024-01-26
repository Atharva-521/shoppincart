import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {useEffect} from "react";
import { fetchData } from "../Redux/Slice/productSlice";


export default function Products(){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product.productsValue);
    useEffect(() => {
       dispatch(fetchData());
    },[])
    return(
        <div>
            {
                data.map((item) => <ProductCard item={item} key={item.id} />)
            }
        </div>
    )
}