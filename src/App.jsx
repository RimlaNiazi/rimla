import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Components/Footer/Footer';





function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="mens" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />


        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Routing /> */}
    </div>
  )
}

export default App
