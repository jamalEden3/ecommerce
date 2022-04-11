import { React, 
    useState, 
    useEffect, 
    useContext, 
    createContext, 
    useReducer 
} from 'react';

import FilteredProductsReducer from '../reducer/FilteredProductsReducer';

import { OPEN_SIDEBAR,
     CLOSE_SIDEBAR,
     START_GET_DATA,
     GET_DATA_SCCUSS,
     GET_DATA_ERROR,
     START_GET_SELECTED_PRODUCT,
     GET_SELECTED_PRODUCT_SUCCESS,
     GET_SELECTED_PRODUCT_ERROR
    } from '../action';

const INITIAL_STATE = {
    products: [],
    filteredProducts: []
}

/* create the context */
const FilteredProductsContext = createContext();

export const FilteredProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FilteredProductsReducer, INITIAL_STATE);


    return (
        <FilteredProductsContext.Provider value={state}>
            { children }
        </FilteredProductsContext.Provider>
        )
}

/* use the context */
export const useProductsContext = () => {
    return useContext(FilteredProductsContext);
}