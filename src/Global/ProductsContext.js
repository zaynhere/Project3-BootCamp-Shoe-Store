import React, {createContext, useState} from 'react';
import productdata from './products.json' 

export const productsContext = createContext();

const ProductsContextProvider = (props) => {
    
    const [products] = useState(productdata)
    
    return(
        <div>
            <productsContext.Provider value={{products: [...products]}}>
               
                {props.children}
                
            </productsContext.Provider>
        </div>
    )
}

export default ProductsContextProvider;

