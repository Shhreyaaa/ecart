import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/wishlist'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'



// useParams: used to get id(dynamic data) from url


function View() {

  const userWishlist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  
  const[product,setProduct]=useState({})
  console.log(product);
  

  const {id}=useParams()
  console.log(id);

  const dispatch=useDispatch()

  useEffect(() => {
    if(localStorage.getItem("allProducts")){
      const allProducts=JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
   
  }, [])

  const handleWishlist=()=>{

    const existingProduct=userWishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product already in your wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }

  }

  const handleCart=()=>{

    const existingProduct=userCart?.find(item=>item.id==product.id)

    if(existingProduct){
      alert("product quantity incremented")
      dispatch(addToCart(product))
    }
    else{
      dispatch(addToCart(product))
    }

  }
  
  
  return (
    <>
    <Header/>
    <div style={{height:'400px',display:'flex',justifyContent:"center",marginTop:'100px'}}>
        <img src={product?.thumbnail} alt="" style={{marginTop:'-50px'}} />

        <div style={{width:'500px',marginTop:'50px'}}>
            <h4 style={{color:'gray'}}>product id: {product?.id}</h4>
            <h3>{product?.title}</h3>
            <h4 style={{color:'rgb(128,0,0)'}}>${product?.price}</h4>
            <p>{product?.description}</p>

            <div style={{display:'flex',justifyContent:'space-between'}}>
            <button onClick={handleWishlist} href="#" style={{border:'none',fontSize:'25px',backgroundColor:'white'}}><i className="fa-solid fa-heart-circle-plus" style={{color:' #a3051d'}}></i></button>

            <button onClick={handleCart} href="#" style={{border:'none',fontSize:'25px',backgroundColor:'white',marginLeft:'170px'}}><i className="fa-solid fa-cart-plus" style={{color:' #05941d'}}></i></button>
            </div>           
            

        </div>        

    </div>

    </>
  )
}

export default View