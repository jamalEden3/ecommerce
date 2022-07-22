
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { HiUserAdd } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";

import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/UserContext';

import styled from 'styled-components';
import { useProductsContext } from '../context/ProductsContext';
import userEvent from '@testing-library/user-event';



const Cartbuttons = () => {
    const { closeSidebar } = useProductsContext();
    const { total_items } = useCartContext();


    const { myUser, loginWithRedirect, logout} = useUserContext();

    return (
        <Wrapper className="cart-btns">
            <Link to='/' className="cart-btn" onClick={closeSidebar}>
                <span className="cart-box">
                    <MdOutlineAddShoppingCart />
                    <span>{total_items}</span>
                </span>
            </Link>
            {
                !myUser ? (
                    <button type="button" className="login-btn">
                        login
                        <HiUserAdd className="login-icon" onClick={loginWithRedirect}/>
                    </button>
                ) : (
                    <button type="button" className="login-btn">
                        logout
                        <BiLogOut className="logout-icon" onClick={() => logout({ returnTo: window.location.origin })}/>
                        <h2>Welcome {myUser.given_name}</h2>
                    </button>
                )
            }
 
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
