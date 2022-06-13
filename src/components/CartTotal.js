import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

const CartTotal = () => {
    const { shipping_fee, total_amount } = useCartContext();
    return (
    <CartTotalWrapper>
        <h5>total price is {formatPrice(total_amount)} </h5>
        <h5>shipping fee is {formatPrice(shipping_fee)}</h5>
        <h5>final total price is {formatPrice(total_amount + shipping_fee)}</h5>
        <Link to="/checkout">Check out</Link>
    </CartTotalWrapper>
    );  
};

const CartTotalWrapper = styled.section`
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-item: center;

    h5 {
        font-size: 20px
    }
`

export default CartTotal;