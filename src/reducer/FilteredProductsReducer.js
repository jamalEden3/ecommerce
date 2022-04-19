import { 
    LOAD_ALL_PRODUCTS,
    DISPLAY_PRODUCTS_IN_LIST,
    DISPLAY_PRODUCTS_IN_GRID,
    UPDATE_LAST_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTER,
    FILTER_PRODUCTS,
    CLEAR_FILTER

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
        const {name, value} = action.payload;
        return {...state, filters:{...state.filters, [name]: value}}
    }
    if(action.type === FILTER_PRODUCTS) {
       const { allProducts } = state;
       const { text, category, company, colors, price, shipping } = state.filters;
       let tempFiltered = [...allProducts];
        if(text) {
            tempFiltered = tempFiltered.filter((product) => {
                return product.name.toLowerCase().startsWith(text);
            })
        }
        
        if(category !== 'all') {
            tempFiltered = tempFiltered.filter((product) => {
                return product.category === category
            })
        }

        if(company !== 'all') {
            tempFiltered = tempFiltered.filter((product) => {
                return product.company === company
            })
        }

        if(colors !== 'all') {
            tempFiltered = tempFiltered.filter((product) => {
                return product.colors.find((clr) => clr === colors)
            })
        }
        
        tempFiltered = tempFiltered.filter((product) => {
            return product.price <= price;
        })

        if (shipping) {
            tempFiltered.filter((product) => product.shipping === true)
        }
        

        return {
            ...state,
            filteredProducts: tempFiltered
        }
    }
    if(action.type === CLEAR_FILTER) {
        return {
            ...state,
            filters:{
                ...state.filters,
                text: '',
                company: 'all',
                colors: 'all',
                category: 'all',
                price: state.filters.max_price,
                shipping: false
            }
        }
    }
    throw new Error(`No matching ${action.type} action type`);
}

export default FilteredProductsReducer;