import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Men.css';
import menshoeimg from '../../images/men.jpg'
import { productsContext } from '../../Global/ProductsContext'

const Men = () => {

    const { products } = useContext(productsContext)

    return (
        <div>
            <div className="menpage-head">
                <img src={menshoeimg} alt={'men-page-image'} />
            </div>
            <div className="products">
                {products.map((product) => {
                    const slug = (product.name).replace(/ /g, "-")
                    return (
                        <div className="product" key={product.id}>

                            <Link to={`${slug}`} >
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
        </div>
    )
}

export default Men