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
    LOAD_ALL_PRODUCTS,
    DISPLAY_PRODUCTS_IN_GRID,
    DISPLAY_PRODUCTS_IN_LIST,
    UPDATE_LAST_SORT
    } from '../action';

const INITIAL_STATE = {
    allProducts: [],
    filteredProducts: [],
    gridGallery: false,
    sort: 'price-lowest'
}

/* create the context */
const FilteredProductsContext = createContext();

export const FilteredProductsProvider = ({ children }) => {
    const { products } = useProductsContext();
    const [state, dispatch] = useReducer(FilteredProductsReducer, INITIAL_STATE);

    useEffect(() => {
        dispatch({ type: LOAD_ALL_PRODUCTS, payload: products })
    },[products]);

    const displayInGrid = () => {
        dispatch({ type: DISPLAY_PRODUCTS_IN_GRID });
    }
    const displayInList = () => {
        dispatch({ type: DISPLAY_PRODUCTS_IN_LIST });
    }

    const getCurrntSort = (e) => {
        const value = e.target.value;
        dispatch({ type: UPDATE_LAST_SORT, payload: value })
    }
    
    return (
        <FilteredProductsContext.Provider value={{...state, displayInGrid, displayInList, getCurrntSort}}>
            { children }
        </FilteredProductsContext.Provider>
        )
}

/* use the context */
export const useFilteredProductsContext = () => {
    return useContext(FilteredProductsContext);
}