import { OPEN_SIDEBAR } from '../action';
import { CLOSE_SIDEBAR } from '../action';

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
    return state;
    throw new Error(`No matching ${action.type} action type`);
}

export default ProductsReducer;