import React, {useContext} from 'react'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from './ProductCard'

function ProductList() {
    const {stays} = useContext(ProductContext)
    return (
        <div>
            <div className="space_item title_wrapper">
                <span className="title">Stays in Finland</span>
                <span>{stays.length} stays</span>
            </div>
            <div className="row">
                {stays.map(product => {
                    return <ProductCard key={product.title} imgSource={product.photo} beds={product.beds} title={product.title} superHost={product.superHost} rating={product.rating} type={product.type} />
                })}

            </div>

        </div>
    )
}

export default ProductList
