import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../Global/CartContext'

const Cart = () => {

    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext)


    return (
        <div className="shoppingCart">
            <div className="headline">
                <h1>YOUR CART</h1>
                <hr />
            </div>
            <div className='cart'>
                <span className="itemm">Product</span>
                <span className='pricee'>price</span>
                <span className="qtyy">quantity</span>
                <span className="totall">total-price</span>

                <br />
                {shoppingCart.length > 0 ?
                    shoppingCart.map(cart => (
                        <div className="cart-item" key={cart.id}>

                            <span className="cart-item-img"><img src={cart.image} alt="not-found" /></span>
                            <span className="cart-details">
                                <span className="cart-item-name">{cart.name}</span>
                                <span className="cart-item-price">${cart.price}.00</span>
                                <span className="cart-item-inc" onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}><i className="fas fa-plus"></i></span>
                                <span className="cart-item-qty">{cart.qty}</span>
                                <span className="cart-item-dec" onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })} ><i className="fas fa-minus"></i></span>
                                <span className="total-price"> ${cart.price * cart.qty}.00</span>
                                <span className="cart-item-del" onClick={() => dispatch({ type: 'DEL', id: cart.id, cart })}><i className="fas fa-trash"></i></span>
                            </span>
                        </div>
                    ))
                    : <div className="empty-cart"> YOUR CART IS EMPTY</div>}
            </div>
            <div>
                {shoppingCart.length > 0 ?
                    <div>
                        <div className="cart-summary">
                            Subtotal ${totalPrice}.00
                        </div>
                        <div className="lil-det"> Tax included and shipping calculated at checkout</div>
                        <div className="chkout-btn">
                            <button>CheckOut</button>
                        </div>
                    </div>
                    : ''}
            </div>
        </div>
    )
}

export default Cart