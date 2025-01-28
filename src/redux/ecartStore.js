import { configureStore } from "@reduxjs/toolkit";
import ecartSlice from './ecartSlice'
import wishlistSlice from "./wishlist";
import cartSlice from "./cartSlice"



const ecartStore=configureStore({
    reducer:{
        productReducer: ecartSlice, 
        wishlistReducer:wishlistSlice,  
        cartReducer:cartSlice  

    }
})
export default ecartStore