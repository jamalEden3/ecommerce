import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems } = useCartContext();
    console.log(cartItems)
    if (cartItems.length < 1) {
        return (
            <CartWrapper className='page-100'>
                <h1>Still empty</h1>
            </CartWrapper>
            
        )
    }
    return (
        <CartWrapper className="page-100">
            <h2>Cart as items</h2>
        </CartWrapper>
    );
};

const CartWrapper = styled.section`
    
    height: 100vh;
    background-color: red;

    h2, h1 {
        margin-top: 100px
    }
    
`
export default Cart;