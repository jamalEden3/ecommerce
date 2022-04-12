import { 
    LOAD_ALL_PRODUCTS,
    DISPLAY_PRODUCTS_IN_LIST,
    DISPLAY_PRODUCTS_IN_GRID,
    UPDATE_LAST_SORT

} from '../action';

const FilteredProductsReducer = (state, action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        return {
            // clone all data from products to --> all productsand so on for filteredProducts
            ...state, allProducts:[...action.payload],filteredProducts:[...action.payload]
        }
    }
    if (action.type === DISPLAY_PRODUCTS_IN_GRID) {
        return {
            ...state, gridGallery: true
        }
    }
    if (action.type === DISPLAY_PRODUCTS_IN_LIST) {
        return {
            ...state, gridGallery: false
        }
    }
    if (action.type === UPDATE_LAST_SORT) {
        return {
            ...state, sort: action.payload
        }
    }
    throw new Error(`No matching ${action.type} action type`);
}

export default FilteredProductsReducer;