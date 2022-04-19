import { 
    LOAD_ALL_PRODUCTS,
    DISPLAY_PRODUCTS_IN_LIST,
    DISPLAY_PRODUCTS_IN_GRID,
    UPDATE_LAST_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTER,
    FILTER_PRODUCTS

} from '../action';

const FilteredProductsReducer = (state, action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        let maxPrice = action.payload.map(item => item.price);
        maxPrice = Math.max(...maxPrice);
        return {
            // clone all data from products to --> all products and so on for filteredProducts
            ...state, 
            allProducts:[...action.payload],
            filteredProducts:[...action.payload],
            filters: {...state.filters, max_price: maxPrice, price: maxPrice}
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
    if (action.type === SORT_PRODUCTS) {
        const { sort, filteredProducts } = state;
        let tempProducts = [...filteredProducts];

        if(sort === 'price-lowest') {
            tempProducts = tempProducts.sort((a,b) => a.price - b.price)
        }
        if(sort === 'price-highest') {
            tempProducts = tempProducts.sort((a,b) => b.price - a.price)
        }
        if(sort === 'name-a') {
            tempProducts = tempProducts.sort((a,b) => {
                return a.name.localeCompare(b.name)
            })
        }
        if(sort === 'name-z') {
            tempProducts = tempProducts.sort((a,b) => {
                return b.name.localeCompare(a.name)
            });
        }
        return{
            ...state, filteredProducts: tempProducts
        }
    }
    if(action.type === UPDATE_FILTER) {
        const {name, value} = action.payload
        return {...state, filters:{...state.filters, [name]: value}}
    }
    if(action.type === FILTER_PRODUCTS) {
        return {
            ...state
        }
    }
    throw new Error(`No matching ${action.type} action type`);
}

export default FilteredProductsReducer;