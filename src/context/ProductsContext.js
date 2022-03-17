import { React, 
        useState, 
        useEffect, 
        useContext, 
        createContext, 
        useReducer 
    } from 'react';

import ProductsReducer from '../reducer/ProductsReducer';

import { OPEN_SIDEBAR } from '../action';
import { CLOSE_SIDEBAR } from '../action';

const INITIAL_STATE = {
    isSidebarOpen : false
}

/* create the context */
const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, INITIAL_STATE);
    
    const openSidebar = () => {
        dispatch({ type: OPEN_SIDEBAR })
    }

    const closeSidebar = () => {
        dispatch({ type: CLOSE_SIDEBAR })
    }

    return (
        <ProductsContext.Provider value={{...state, openSidebar, closeSidebar}}>
            { children }
        </ProductsContext.Provider>
    )
}

/* use the context */
export const useProductsContext = () => {
    return useContext(ProductsContext);
}