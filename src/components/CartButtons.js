import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";

import styled from 'styled-components';

const Cartbuttons = () => {
    return (
        <Wrapper className="cart-btns">
            <Link to='/' className="cart-btn">
                <span className="cart-box">
                    <MdOutlineAddShoppingCart />
                    <span>12</span>
                </span>
            </Link>
            <button type="button" class="login-btn">
                login
                <HiUserAdd className="login-icon" />
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: 1px solid #254;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 200px

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
        color: red
    }

`


export default Cartbuttons;
