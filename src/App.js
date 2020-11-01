import React from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import LaunchShoe from './components/LaunchShoe/LaunchShoe'
import Men from './components/Men/Men'
import Women from './components/Women/Women'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import ProductsContextProvider from './Global/ProductsContext'
import CartContextProvider from './Global/CartContext'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div>
      <ProductsContextProvider >
        <CartContextProvider>

        <Router>

          <Navbar />
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Launch/:slug" element={<LaunchShoe />} />
            <Route path="Men" element={<Men />} />
            <Route path="Men/:slug" element={<LaunchShoe />} />
            <Route path="Women" element={<Women />} />
            <Route path="Women/:slug" element={<LaunchShoe />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Cart" element={<Cart />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Footer />
          
        </Router>
      
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}


export default App;