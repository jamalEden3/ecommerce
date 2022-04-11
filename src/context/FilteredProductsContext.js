import { React, 
    useState, 
    useEffect, 
    useContext, 
    createContext, 
    useReducer 
} from 'react';

import FilteredProductsReducer from '../reducer/FilteredProductsReducer';
import { useProductsContext } from './ProductsContext';

import {
    LOAD_ALL_PRODUCTS 
    } from '../action';

const INITIAL_STATE = {
    allProducts: [],
    filteredProducts: [],
    gridGallery: false
}

/* create the context */
const FilteredProductsContext = createContext();

export const FilteredProductsProvider = ({ children }) => {
    const { products } = useProductsContext();
    const [state, dispatch] = useReducer(FilteredProductsReducer, INITIAL_STATE);

    useEffect(() => {
        dispatch({ type: LOAD_ALL_PRODUCTS, payload: products })
    },[products]);
    
    return (
        <FilteredProductsContext.Provider value={{...state}}>
            { children }
        </FilteredProductsContext.Provider>
        )
}

/* use the context */
export const useFilteredProductsContext = () => {
    return useContext(FilteredProductsContext);
}