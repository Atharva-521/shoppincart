import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slice/productSlice'
import cartSlice from './Slice/cartSlice'

export const store = configureStore({
    reducer : {
        product : productSlice,
        cart: cartSlice
    }
})