import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// creareAsyncThunk('action string',()=>{})

    export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
        const result= await axios.get('https://dummyjson.com/products')

        // to store data into local storage
        localStorage.setItem('allProducts',JSON.stringify(result.data.products))

        return result.data.products
    })

const ecartSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        pending:false,
        error:"" 
    },
    // synchronous actions
    reducers:{ 
        searchProducts:(state,action)=>{
            state.allProducts=state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload))
        }       

    },
    // Asynchronous actions
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.dummyAllProducts=action.payload
            state.pending=false
            state.error=""
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.allProducts=[]
            state.pending=true
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.pending=false
            state.error="api call failed"
        })
        

    }

}) 
export const { searchProducts } = ecartSlice.actions
export default ecartSlice.reducer




