import React, {useContext} from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import { productsContext } from '../../Global/ProductsContext'
 
const Products = () => {

    const {products} = useContext(productsContext)
    
    
    return(
        <div className="products">
            
            {products.map((product)=>{
                    const slug = (product.name).replace(/ /g , "-")
                return (
                    <div className="product" key={product.id}>
                        
                    <Link to= {`Launch/${slug}`} >
                    <div className="prod-img">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-details">
                        <div className="product-name"> {product.name} </div>
                        <div className="product-price"> ${product.price}.00 </div>
                    </div></Link>
                    </div>)
            })}

        </div>
    )
}

export default Products;
