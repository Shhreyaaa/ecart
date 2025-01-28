import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/ecartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from '../components/Pagination';




function Home() {
  // const state=useSelector(state=>state)
  // console.log(state);

  const[currentPage,setCurrentPage]=useState(1)
  const cardPerPage=6


  const {allProducts,pending,error}=useSelector(state=>state.productReducer)
  console.log(allProducts,pending);


  
  const endingIndex=currentPage*cardPerPage
  const startingIndex=endingIndex-cardPerPage
  const currentProducts=allProducts.slice(startingIndex,endingIndex)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
   
  },[] )


  
  
  return (
    <>
    <Header insideHome={true}/>
    {
      pending?(
      <div >
        <Spinner animation="border" variant="dark"/>

      </div>
      )
      :
   
      (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '150px' }}>
          {currentProducts.length > 0 ? (
            currentProducts.map(product => (
              <Card key={product.id} style={{ width: '18rem', margin: '20px' }}>
                <Card.Img variant="top" src={product?.thumbnail} height="300px" />
                <Card.Body>
                  <Card.Title className="text-black">{product?.title}</Card.Title>
                  {/* {product?.title.slice(0,16)}... */}
                  <Link to={`/view/${product?.id}`} style={{ textDecoration: 'none', color: 'rgb(128,0,0)', marginLeft: '15px' }}>
                    View more
                  </Link>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

      )
    }   

    {
      currentProducts?.length>0 &&
      <Pagination totalProducts={allProducts?.length} cardPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    } 
    
    </>
    
  )
}

export default Home