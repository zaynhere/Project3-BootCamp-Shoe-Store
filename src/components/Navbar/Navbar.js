import React, {useContext} from 'react';
import {NavLink , Link} from 'react-router-dom';
import './Navbar.css'
import logo from '../../images/logo.png'
import {CartContext} from '../../Global/CartContext'

export default function Navbar() {

    const {shoppingCart , totalPrice , qty , dispatch} = useContext(CartContext)

    return(
        <div className="navbar">
                <span className="sec1" >
                    <ul>
                        
                           <NavLink to="Men" as="li" >Men</NavLink> 
                        
                        
                            <NavLink to="Women" as="li" >Women</NavLink> 
                        
                        
                            <NavLink to="About" as="li" >About</NavLink> 
                        
                        
                            <NavLink to="Contact" as="li" >Contact</NavLink> 
                        
                    </ul>
                </span>
                <span className="sec2" >
                    <Link to="/"><img src={logo} alt={"logo"}/></Link>
                </span>
                <span className="sec3" >
                <Link to="Cart" as="li"> <span className="cart"><i className="fas fa-cart-plus"></i></span>                    
                    <span className="cartCount">{qty}</span> </Link>
                </span>

        </div>
    )
}

