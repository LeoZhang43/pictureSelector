import React, { useState } from 'react'
import { useProductsContext } from './product_context'
import './Images.css'

const Images = () => {
    const{
        products,
    } = useProductsContext()
    console.log(products.images)
    const[ main, setMain ] = useState(products.images[0])
    return(
        <div>
            <img src={main.url} alt="main image" className='main'/>
            <div className='gallery'>
                {products.images.map((image, index) => {
                    return(
                        <img    
                            src={image.url}
                            alt={image.filename}
                            key={index}
                            onClick={() => setMain(products.images[index])}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Images;