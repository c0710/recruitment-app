import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import ProductList from '../components/ProductList'
import ProductItem from '../components/ProductItem'

const ProductContainer = (products, total, checkout) => {
    const children = <div> list</div>
    return (
        <div>
            <p>product container</p>
            <div>
                <ProductList title={'product list'}>
                    {products.map(item => (
                        <ProductItem product={item} />
                    ))}
                </ProductList>
            </div>
        </div>
    )
}

export default ProductContainer