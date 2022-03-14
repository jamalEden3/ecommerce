import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import styled from 'styled-components';

/* components */
import CartButons from './CartButtons';

const Navbar = () => {
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src="https://img.icons8.com/ios/50/000000/discord.png"/>
                    </Link>
                    <button type="button" className="nav-toggle">
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
    border: 1px solid lightgreen;
    dsiplay: flex;
    justify-content: center;
    align-items: center;

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
        color: red;
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