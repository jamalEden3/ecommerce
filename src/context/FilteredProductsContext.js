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
    UPDATE_LAST_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTER,
    FILTER_PRODUCTS
    } from '../action';

const INITIAL_STATE = {
    allProducts: [],
    filteredProducts: [],
    gridGallery: false,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        colors: 'all',
        categorey: 'assll',
        max_price: 0,
        min_price: 0,
        price: 0,
        shipping: false
    },
}

/* create the context */
const FilteredProductsContext = createContext();

export const FilteredProductsProvider = ({ children }) => {
    const { products } = useProductsContext();
    const [state, dispatch] = useReducer(FilteredProductsReducer, INITIAL_STATE);


    // put all products inside filteredProducts array
    useEffect(() => {
        dispatch({ type: LOAD_ALL_PRODUCTS, payload: products })
    },[products]);

    // dispatch SORT_PRODUCTS every time sort value or products changes
    useEffect(()=>{
        dispatch({ type: FILTER_PRODUCTS })
        dispatch({ type: SORT_PRODUCTS })
    },[products, state.sort, state.filters]);

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

    const updateFilter = (e) => {
        let name = e.target.name
        let value = e.target.value
        dispatch({ type: UPDATE_FILTER, payload: {name, value} }) 
    }

    const clearFilter = () => {}
    
    return (
        <FilteredProductsContext.Provider value={{...state, displayInGrid, displayInList, getCurrntSort, updateFilter, clearFilter}}>
            { children }
        </FilteredProductsContext.Provider>
        )
}

/* use the context */
export const useFilteredProductsContext = () => {
    return useContext(FilteredProductsContext);
}