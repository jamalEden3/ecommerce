import { useState, useEffect } from 'react';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";

import styled from 'styled-components';

/* components */
import CartButons from './CartButtons';

import { useProductsContext } from '../context/ProductsContext';

const Navbar = () => {

    const { openSidebar, isSidebarOpen } = useProductsContext();
    const [isScrolled, setIsScrolled] = useState(true);
    const [offset, setOffset] = useState(0)

    const handleScroll = () => setOffset(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    useEffect(() => {
       if(offset > 100) {
           setIsScrolled(false)
       } else {
           setIsScrolled(true)
       }
    }, [offset]);

    useEffect(() => {
        console.log(isScrolled);
        console.log(offset)
     }, [])

    return (
        <NavContainer className={isScrolled ? "" : "navnov"}>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src="https://img.icons8.com/ios/50/000000/discord.png"/>
                    </Link>
                    <button type="button" className="nav-toggle btn" onClick={openSidebar}>
                        <FaBars /> 
                    </button>
                </div>
                <ul className="nav-list">
                    {
                        links.map((link) => {
                            const { id, name, url } = link;
                            return (
                                <li key={id}>
                                    <Link to={url}>{name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <CartButons />
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
    height: 5rem;
    width: 100%;
    dsiplay: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    padding-top: var(--p-1);
    background-color: var(--primary-white);
    transition: .5s all;
    z-index: 10;

    /* &.navnov {
        background-color: #000;
    } */
    
    .nav-center {
        width: 90vw;
        margin-inline: auto;
        max-width: 1200px
    }

    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-toggle {
        color: var(--primary-green);
        svg {
            font-size: 2rem;
        }
    }

    .nav-list {
        display: none;
    }

    .cart-btns {
        display: none;
    }

    @media (min-width: 992px) {
        .nav-toggle {
            display: none;
        }

        .nav-center {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
        }

        .nav-list {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            a {
                color: red;
                font-size: var(--fs-300);
                font-weight: 600;
                text-transform: capitalize;
    
                &:hover {
                    border-bottom: 2px solid #000;
                }
            }
        }

        .cart-btns {
            display: grid;
        }
    } 


`

export default Navbar;