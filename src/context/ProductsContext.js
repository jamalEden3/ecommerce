import { React, 
        useState, 
        useEffect, 
        useContext, 
        createContext, 
        useReducer 
    } from 'react';

import ProductsReducer from '../reducer/ProductsReducer';
import { OPEN_SIDEBAR,
         CLOSE_SIDEBAR,
         START_GET_DATA,
         GET_DATA_SCCUSS,
         GET_DATA_ERROR,
         START_GET_SELECTED_PRODUCT,
         GET_SELECTED_PRODUCT_SUCCESS,
         GET_SELECTED_PRODUCT_ERROR
        } from '../action';
import { products_url as url } from '../utils/constants';
import axios from 'axios';

const INITIAL_STATE = {
    isSidebarOpen : false,
    products:[],
    featuredProducts: [],
    productsLoading: true,
    productsError: false,
    selectedProductLoading: true,
    selectedProductError: false,
    selectedProduct: {}
}

/* create the context */
const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, INITIAL_STATE);
    
    const openSidebar = () => {
        dispatch({ type: OPEN_SIDEBAR })
    };

    const closeSidebar = () => {
        dispatch({ type: CLOSE_SIDEBAR })
    };

    // fetch all data when app load
    const fetchProducts = async (url) => {
        try {
            dispatch({ type: START_GET_DATA });
            const response = await axios.get(url);
            const products = response.data;
            dispatch({ type: GET_DATA_SCCUSS, payload: products });
        } catch (error) {
            dispatch({ type: GET_DATA_ERROR })
        }
    };

    // fetch single data when user click specific product
    const fetchSelectedProduct = async (url) => {
        dispatch({ type: START_GET_SELECTED_PRODUCT })
        try {
          const response = await axios.get(url)
          const selectedProduct = await response.data
          dispatch({ type: GET_SELECTED_PRODUCT_SUCCESS, payload: selectedProduct })
        } catch (error) {
          dispatch({ type: GET_SELECTED_PRODUCT_ERROR })
        }
      }

    useEffect(() => {
        fetchProducts(url);
    },[]);

    

    return (
        <ProductsContext.Provider value={{...state, openSidebar, closeSidebar, fetchSelectedProduct}}>
            { children }
        </ProductsContext.Provider>
    )
}

/* use the context */
export const useProductsContext = () => {
    return useContext(ProductsContext);
}