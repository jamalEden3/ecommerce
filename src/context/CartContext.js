import { React, 
    useState, 
    useEffect, 
    useContext, 
    createContext, 
    useReducer 
} from 'react';

import CartReducer from '../reducer/CartReducer';

import {
    ADD_TO_CART
    } from '../action';

const INITIAL_STATE = {
    cartItems: [],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 300
}

/* create the context */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    const addToCart = (id, currentColor, productCount, product) => {
        console.log("sd")
        dispatch({ type: ADD_TO_CART, payload: {id, currentColor, productCount, product} });
    }
    return (
        <CartContext.Provider value={{...state, addToCart}}>
            { children }
        </CartContext.Provider>
    );
}

/* use the context */
export const useCartContext = () => {
    return useContext(CartContext);
}