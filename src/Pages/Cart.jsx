import React from 'react';
import Header from '../components/Header';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';



function Cart() {
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const TotalPrice=userCart?.map(product=>product.totalPrice)?.reduce((p1,p2)=>p1+p2,0)

  const handleDecrement = (productId) => {
    const existingProduct = userCart.find((item) => item.id == productId);
    if (existingProduct.quantity > 1) {
      dispatch(decQuantity(productId));
    } else {
      dispatch(removeCartItem(productId));
    }
  };

  const handleCheckout=()=>{
    alert('Order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  

  return (
    <>
      <Header />
      <div style={{ display: 'flex', marginTop: '100px' }} className="p-4">
        {userCart?.length > 0 ? (
          <>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {userCart.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item?.thumbnail} alt={item?.title} style={{ height: '70px', width: '70px' }} />
                    </td>
                    <td>
                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <button
                          onClick={() => handleDecrement(item.id)}
                          style={{ backgroundColor: 'wheat', border: 'none', width: '35px' }}
                        >
                          -
                        </button>
                        <input type="text" style={{ width: '40px' }} readOnly value={item?.quantity} />
                        <button
                          onClick={() => dispatch(incQuantity(item?.id))}
                          style={{ backgroundColor: 'wheat', border: 'none', width: '35px' }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${item?.totalPrice}</td>
                    <td>
                      <button
                        style={{ border: 'none' }}
                        onClick={()=>dispatch(removeCartItem(item?.id))}
                      >
                        <i className="fa-solid fa-trash" style={{ color: 'rgb(128,0,0)' }}></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div style={{ width: '700px', marginTop: '10px' }}>
              <div
                style={{
                  border: '1px solid rgb(128,0,0)',
                  width: '350px',
                  height: '170px',
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <h5>Total item:{userCart?.length}</h5>
                <h3>Total amount: ${Math.floor(TotalPrice)}</h3>
                <Link to={'/'}><button onClick={handleCheckout} className="mt-3"style={{height: '40px', width: '305px', border: 'none',backgroundColor:'wheat',borderRadius: '2px',}}>
                  CHECK OUT
                </button></Link>
              </div>
            </div>
          </>
        ) : (
          <div style={{marginLeft:'360px'}} >
            <img src="https://aleointernational.com/img/empty-cart-yellow.png" alt="" />
            
          </div>
          
        )}
      </div>
      <button onClick={()=>dispatch(emptyCart())} style={{margin:'40px', border:'none',borderRadius:'5px', width:'170px',height:'45px',backgroundColor:'rgb(128,0,0)',color:'white',fontWeight:'bold'}}>EMPTY CART</button>
    <Link to='/'><button style={{marginBottom:'40px', border:'none',borderRadius:'5px', width:'170px',height:'45px',backgroundColor:'green',color:'white',fontWeight:'bold'}}>SHOP MORE</button></Link>
    </>
  );
}

export default Cart;
