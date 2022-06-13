import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';

import { CartColumns, CartTotal, CartItems } from '../components';

const Cart = () => {
    const { cartItems, clearCartItems } = useCartContext();
    
    // check if client did not select any products yet!
    if (cartItems.length < 1) {
        return (
            <CartWrapper className='page-100'>
                <h1>Still empty</h1>
            </CartWrapper>
            
        )
    }

    // default return, if above condition was false
    return (
        <CartWrapper className='page-100'>
            <CartColumns />
            {cartItems.map(item => <CartItems key={item.id} {...item} />)}
            <button type='buton' onClick={clearCartItems}> cart</button>
            <CartTotal />
        </CartWrapper>
    );
};

const CartWrapper = styled.section`
    
    background-color: red;

    h2, h1 {
        margin-top: 100px
    }
    
`
export default Cart;