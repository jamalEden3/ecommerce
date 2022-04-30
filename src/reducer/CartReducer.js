import {
    ADD_TO_CART
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
    throw new Error(`No matching ${action.type} action type`);
}

export default CartReducer;