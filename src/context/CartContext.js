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


const getItemFromLocalStorage = () => {
    let cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        return JSON.parse(localStorage.getItem('cartItems'));
    } else {
        return []
    }
}

const INITIAL_STATE = {
    cartItems: getItemFromLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 300
}

/* create the context */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    const addToCart = (id, currentColor, productCount, product) => {
        dispatch({ type: ADD_TO_CART, payload: {id, currentColor, productCount, product} });
    }

    // remove item from cartItems
    const removeItem = (id) => {

    }

    // toggle count
    const toggleItemCount = (id, value) => {

    }

    //clear cartItems
    const clearCartItems = () => {

    }

    // set items in local storage every time cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }, [state.cartItems]);


    return (
        <CartContext.Provider value={{...state, addToCart, removeItem, toggleItemCount, clearCartItems}}>
            { children }
        </CartContext.Provider>
    );
}

/* use the context */
export const useCartContext = () => {
    return useContext(CartContext);
}