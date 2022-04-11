import { 
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR,
    START_GET_DATA,
    GET_DATA_SCCUSS,
    GET_DATA_ERROR,
    START_GET_SELECTED_PRODUCT,
    GET_SELECTED_PRODUCT_SUCCESS,
    GET_SELECTED_PRODUCT_ERROR

} from '../action';

const ProductsReducer = (state, action) => {
    if (action.type === OPEN_SIDEBAR) {
        return {
            ...state,
            isSidebarOpen : true
        }
    }
    if (action.type === CLOSE_SIDEBAR) {
        return {
            ...state,
            isSidebarOpen: false
        }
    }
    if (action.type === START_GET_DATA) {
        return {
            ...state, productsLoading: true
        }
    }
    if (action.type === GET_DATA_SCCUSS) {
        const featuredProducts = action.payload.filter((product) => product.featured === true);
        return {
            ...state, productsLoading: false,  products: action.payload, featuredProducts
        }
    }
    if (action.type === GET_DATA_ERROR) {
        return {
            ...state, productsLoading: false, productsError: true
        }
    }
    if (action.type === START_GET_SELECTED_PRODUCT) {
        return {
            ...state, selectedProductLoading: true, selectedProductError: false
        }
    }
    if (action.type ===  GET_SELECTED_PRODUCT_SUCCESS) {
        return {
            ...state, selectedProductLoading: false, selectedProduct: action.payload
        }
    }
    if (action.type ===  GET_SELECTED_PRODUCT_ERROR) {
        return {
            ...state, selectedProductLoading: false, selectedProductError: true
        }
    }
    throw new Error(`No matching ${action.type} action type`);
}

export default ProductsReducer;