import React, {useContext} from 'react'
import './LaunchShoe.css'
import {useParams} from 'react-router-dom'
import { productsContext } from '../../Global/ProductsContext'
import { CartContext } from '../../Global/CartContext'


const LaunchShoe = () => {

    const { slug } = useParams() ;
    const {products} = useContext(productsContext)
    const {dispatch} = useContext(CartContext)

    let filter = products.filter((product) => {
        return (
            (product.name === slug.replace(/-/g , " "))
        )
    })
    let prod = {...filter}
   
    return(
        <div>
            
            <div className="item-img" >
                <img src={prod[0].image} alt={prod[0].name} />
            </div>
            <div className="col">
                <div className="item-name">
                    {prod[0].name}  
                </div>
                <br />
                <div className="item-price">
                    ${prod[0].price}.00  
                </div>
                <br />
                <div className="item-details">
                    {prod[0].description}  
                </div> 
                <br />
                
                <div className="add-cart-btn" onClick={()=> dispatch({type: 'ADD_TO_CART' , id: prod[0].id , product: prod[0]  })}>
                    <button>ADD TO CART</button>
                </div>
            </div>
            
        </div>
    )
}

export default LaunchShoe;