import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { useCartContext } from '../context/CartContext'; 

import styled from 'styled-components';
import { useProductsContext } from '../context/ProductsContext';

const Cartbuttons = () => {
    const { closeSidebar } = useProductsContext();
    const { total_items } = useCartContext();

    return (
        <Wrapper className="cart-btns">
            <Link to='/' className="cart-btn" onClick={closeSidebar}>
                <span className="cart-box">
                    <MdOutlineAddShoppingCart />
                    <span>{total_items}</span>
                </span>
            </Link>
            <button type="button" className="login-btn" onClick={closeSidebar}>
                login
                <HiUserAdd className="login-icon" />
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 200px;

    .cart-btn {
        color: #888;
        font-size: var(--fs-300);
        font-weight: 600;
    }

    .cart-box, .login-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        svg {
            color: red;
            font-size: var(--fs-500);
        }
    }

    .cart-box > span {
        position: absolute;
        top: -10px;
        right: 5px;
        background: red;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        color: #fff;
        font-size: var(--fs-300)
    }

    .login-btn {
        color: red;
        font-size: var(--fs-400);
        font-weight: 600;
    }

`


export default Cartbuttons;
