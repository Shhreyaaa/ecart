import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'myCart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)  
            
            if(existingProduct){
                remainingProducts=state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                state=[...remainingProducts,existingProduct]
            }
            else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
            
        },
        incQuantity:(state,action)=>{
                const existingProduct=state.find((item)=>item.id==action.payload)             
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProducts,existingProduct]
        },
        decQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)  
           
                existingProduct.quantity--
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
               const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProducts,existingProduct]
        },
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export default cartSlice.reducer
export const {addToCart,incQuantity,decQuantity,removeCartItem,emptyCart}=cartSlice.actions