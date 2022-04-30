import {
    ADD_TO_CART
} from '../action';

const CartReducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        return {
            ...state
        }
    }
    throw new Error(`No matching ${action.type} action type`);
}

export default CartReducer;