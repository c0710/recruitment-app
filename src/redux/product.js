import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

const products = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory - 1
            }
        default:
            return state
    }
}

