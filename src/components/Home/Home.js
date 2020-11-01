import React from 'react';
import './Home.css'
import {Outlet} from 'react-router-dom'
import Header from '../Header/Header'
import Products from '../Products/Products'

function Home() {
  return (
    <div>
       <Header />
       <h2 className="home-prod">Our Products</h2>
       <Products />
       <Outlet />
    </div>
  );
}


export default Home;