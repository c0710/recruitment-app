import React, { Component } from 'react';
import ProductsContainer from './ProductContainer'
import CartContainer from './CartContainer'

const App = () => (
    <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <ProductsContainer />
        <hr/>
        <CartContainer />
    </div>
)

export default App;
