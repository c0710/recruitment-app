import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

const productsData = [
    {title: 'pro1', price: 11, id: 1, quantity: 2},
    {title: 'pro2', price: 12, id: 2, quantity: 2},
    {title: 'pro3', price: 13, id: 3, quantity: 2},
    {title: 'pro4', price: 14, id: 4, quantity: 2},
    {title: 'pro5', price: 15, id: 5, quantity: 2}
]
let totalData = 111

const CartContainer = (products, total, checkout) => (
    <Cart
        products={productsData}
        total={totalData}
        onCheckoutClicked={() => checkout(products)} />
)


export default CartContainer