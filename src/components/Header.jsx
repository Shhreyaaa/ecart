import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { searchProducts } from '../redux/ecartSlice';
import { useDispatch, useSelector } from 'react-redux';



function Header({insideHome}) {

  const userWishlist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(searchProducts(e.target.value)); 
  };
  return (
    <>
    <Navbar expand="lg" fixed='top' className=" " style={{backgroundColor:'rgb(245,245,245)'}}>
      <Container fluid>
        <Navbar.Brand href="#"> <i className="fa-solid fa-store"></i> FASHION STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="my-lg-0"
            style={{ maxHeight: '100px', marginLeft:'500px'}}
            navbarScroll
          >          
            
            
          
          </Nav>
          { insideHome &&
            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"style={{width:'300px'}} onChange={(e)=>dispatch(searchProducts(e.target.value))}/>
            
          </Form>}

        <Nav className="ms-auto d-flex align-items-center">
          <NavLink to="/wishlist"  className='' style={{border:'none',color:'red' , marginRight:'-20px'}}><i className="fa-solid fa-heart" style={{fontSize:'25px'}}></i>
          <Badge bg="secondary">{userWishlist?.length}</Badge>          
          </NavLink>
          <NavLink to="/cart" style={{border:'none',marginLeft:'20px'}}><i className="fa-solid fa-cart-shopping" style={{fontSize:'25px'}}></i>
          <Badge bg="secondary">{userCart?.length}</Badge>
          </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header