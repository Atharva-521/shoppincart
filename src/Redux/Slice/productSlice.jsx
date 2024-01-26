import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import { useEffect } from 'react';

export const fetchData = createAsyncThunk(
    'productSlice/fetchData',
    async () => {
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = response.json();
            return data;
        }
        catch(error){
            console.log("Oops Error occured....");
            throw error;
        }
    }
)



const initialState = {
    productsValue: [],
    status:'idle',
    error:null
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    //builder object basically helps to change/set the values of state depending on an action addCase(action,reducer function)
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending,(state) => {
            state.status = 'loading'
        })

        builder.addCase(fetchData.fulfilled,(state,action) => {
            state.status = 'fullfilled';
            state.productsValue = action.payload;
            
        })

        builder.addCase(fetchData.rejected,(state,action) => {
            state.status = 'failed';
            state.error = action.error.message;

        });
    }
})

export default productSlice.reducer;