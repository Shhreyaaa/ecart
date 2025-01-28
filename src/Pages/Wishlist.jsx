import React from 'react';
import Header from '../components/Header';
import { Card, Button } from 'react-bootstrap'; // Removed NavLink
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/wishlist';
import { addToCart } from '../redux/cartSlice';


function Wishlist() {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart=useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch();
  

  const handleCart=(product)=>{
  
      const existingProduct=userCart.find(item=>item.id==product.id)
  
      if(existingProduct){
        alert("product quantity incremented")
        dispatch(addToCart(product))
        dispatch(removeWishlistItem(product?.id))
      }
      else{
        dispatch(addToCart(product))
        dispatch(removeWishlistItem(product?.id))
      }
  
    }

  return (
    <>
      <Header/>
      <h1 className="mt-4 ms-5">Your Wishlist</h1>

      {userWishlist?.length > 0 ? (
        <div className="container mt-4">
          <div className="row">
            {userWishlist.map((product) => (
              <div className="col-md-4 col-sm-6 mb-4" key={product?.id}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={product?.thumbnail} height="300px" />
                  <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button variant="light" onClick={() => dispatch(removeWishlistItem(product?.id))}>
                        <i className="fa-solid fa-heart-circle-xmark" style={{ color: 'rgb(163, 5, 42)', fontSize: '25px'}}></i>
                      </Button>
                      <Button onClick={()=>handleCart(product)} variant="light"><i className="fa-solid fa-cart-plus" style={{ color: '#05941d', fontSize: '25px' }}></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-5 d-flex flex-column align-items-center">
          <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg"alt="Empty Wishlist" style={{ maxWidth: '400px', marginTop: '20px' }}
          />
        </div>
      )}
    </>
  );
}

export default Wishlist;
