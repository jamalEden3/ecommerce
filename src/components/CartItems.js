import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { useCartContext } from '../context/CartContext';

import { CountControllers } from '../components';

const CartItems = ({id, image,name, currentColor, productCount, price}) => {

    const { removeItem, toggleItemCount } = useCartContext();
    
    const increaseItem = () => {
        toggleItemCount(id, "inc")
    }
    
    const decreaseeItem = () => {
        toggleItemCount(id, "dec")
    }
        
    return (    
        <CartItemsWrapper>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <span style={{backgroundColor: currentColor, width: '100px', height:'100px'}}></span>
            <h5>price is: {formatPrice(price)}</h5>
            <CountControllers count={productCount} increase={increaseItem} decrease={decreaseeItem} />
            <h5>subtotal is {formatPrice(productCount * price)}</h5>
            <button type='button' onClick={() => removeItem(id)}>remove item</button>
        </CartItemsWrapper>
    );
};

const CartItemsWrapper = styled.section`
    display: flex;
    flex-flow: column;

    img {
        width: 200px;
        height: 200px;
    }
`
export default CartItems;