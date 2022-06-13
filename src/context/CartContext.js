import { React,
    useEffect, 
    useContext, 
    createContext, 
    useReducer 
} from 'react';

import CartReducer from '../reducer/CartReducer';

import {
    ADD_TO_CART,
    REMOVE_ITEM,
    CLEAR_CART,
    TOGGLE_ITEM_COUNT,
    GET_TOTAL_ITEMS
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
        dispatch({ type: REMOVE_ITEM, payload: id });
    }

    // toggle count
    const toggleItemCount = (id, value) => {
        dispatch({
            type: TOGGLE_ITEM_COUNT,
            payload: {
                id, value
            }
        })
    }

    //clear cartItems
    const clearCartItems = () => {
        dispatch({ type: CLEAR_CART })
    }

    // set items in local storage every time cartItems changes
    useEffect(() => {
        dispatch({ type: GET_TOTAL_ITEMS })
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