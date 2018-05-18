import React from 'react'
import Product from './Product'

const Cart = ({products, total}) => {
    const hasProducts = products.length > 0
    console.log(products)
    const nodes = hasProducts ? (
        products.map(product => (
            <Product
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            />
        ))
    ) : (
        <em>Please add some products to cart.</em>
    )

    return (
        <div>
            <h3>your cart</h3>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
        </div>
    )
}

export default Cart