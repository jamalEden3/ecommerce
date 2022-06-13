
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    CLEAR_CART,
    TOGGLE_ITEM_COUNT,
    GET_TOTAL_ITEMS
} from '../action';

const CartReducer = (state, action) => {

    if (action.type === ADD_TO_CART) {
        const { id, currentColor, productCount, product } = action.payload;
        let existingItem = state.cartItems.find((item) => item.id === id + currentColor);

        // if item exist in cartItems
        if(existingItem){
            let updatedCart = state.cartItems.map((item) => {
                if (item.id === id + currentColor) {
                    let newCount = item.productCount + productCount
                    if(newCount > item.max) {
                        newCount = item.max
                    }
                    return {...item, productCount:  newCount}
                } else {
                    return {...item}
                }
            })

            return {
                ...state, cartItems: updatedCart
            }
        }
        
        // if item doesn't exist in cartItems
        else {
            let newItem ={
                id: id + currentColor,
                name: product.name,
                currentColor,
                productCount,
                price: product.price,
                image: product.images[0].url,
                max: product.stock
            }

            return {
                ...state, cartItems:[...state.cartItems, newItem]
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let updatedCart = state.cartItems.filter((item) => item.id !== action.payload);
        return{
            ...state, cartItems: updatedCart
        }
    }

    if (action.type === CLEAR_CART ) {
        return {
            ...state,cartItems: []
        }
    }

    if (action.type === TOGGLE_ITEM_COUNT) {
        const {id, value} = action.payload
        const updatedCart = state.cartItems.map((item) => {
           if (item.id === id) {
            if (value === 'inc') {
                let newCount = item.productCount + 1
                if (newCount > item.max) {
                    newCount = item.max
                }
                return {
                    ...item, productCount: newCount
                }
            }

            if (value === 'dec') {
                let newCount = item.productCount - 1;
                if (newCount < 1) {
                    newCount = 1
                }
                return {
                    ...item, productCount: newCount
                }
            }
           } else {
               return item
           }
       })
        return {
            ...state, cartItems: updatedCart
        }
    }

    if (action.type === GET_TOTAL_ITEMS) {
        const {total_amount, total_items} = state.cartItems.reduce((total, item) => {
            const { productCount, price } = item;
            total.total_items += productCount;
            total.total_amount += productCount * price;

            return total;
        }
        ,{ total_amount:0, total_items: 0 })

        return {...state, total_amount: total_amount, total_items: total_items}
    }
    throw new Error(`No matching ${action.type} action type`);
}

export default CartReducer;