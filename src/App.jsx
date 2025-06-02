import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './Pages/Wishlist'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Footer from './components/Footer'
import View from './Pages/View'







function App() {

  

  return (
    <>
    
    
    <Routes>
      <Route path={'/'} element={<Home/>}/>      
      <Route path={'/wishlist'} element={<Wishlist/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'/view/:id'} element={<View/>}/>
    </Routes>

    <Footer/>
      
    </>
  )
}

export default App
