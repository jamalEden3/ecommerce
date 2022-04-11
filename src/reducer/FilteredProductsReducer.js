import { 
    LOAD_ALL_PRODUCTS

} from '../action';

const FilteredProductsReducer = (state, action) => {
    if(action.type === LOAD_ALL_PRODUCTS) {
        return {
            // clone all data from products to --> all productsand so on for filteredProducts
            ...state, allProducts:[...action.payload],filteredProducts:[...action.payload]
        }
    }
    throw new Error(`No matching ${action.type} action type`);
}

export default FilteredProductsReducer;