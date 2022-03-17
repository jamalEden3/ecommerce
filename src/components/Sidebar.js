import styled from 'styled-components';
import { AiOutlineCloseCircle }  from "react-icons/ai";
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
/* components */
import Cartbuttons from './CartButtons';

import { useProductsContext } from '../context/ProductsContext';


const Sidebar = () => {
    const data = useProductsContext();
    const { isSidebarOpen, closeSidebar } = data;
    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                 <div className="aside-header">
                     <img src="https://img.icons8.com/ios/50/000000/discord.png" className="logo" />
                     <button type="button" className="btn close-btn" onClick={closeSidebar}>
                         <AiOutlineCloseCircle />
                     </button>
                 </div>
                 <ul className="side-list">
                    {
                        links.map(({id, url, name}) => {
                            return (
                                <li key={id}>
                                    <Link to={url} className="side-link" onClick={closeSidebar}>
                                        {name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                 </ul>
                 <Cartbuttons />
                 <Link to='/checkout' className="checkout-btn" onClick={closeSidebar}>Check Out</Link>
            </aside>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #999999;
        transform: translate(-100%);
        z-index: -1;
        transition: all .3s;
    }

    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }

    .aside-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid red;
        background-color: #fff;
        padding-inline: 2rem;
    }

    .side-list {
        margin: 0;
        margin-top: 2rem;
        padding-inline: 2.5rem
    }

    .side-list > * {
        margin-bottom: 1rem;
        font-size: var(--fs-400);
        font-weight: 600;
    }

    .side-link {
        color: red;
    }

    .logo {
        cursor: pointer;    
    }

    .close-btn {
        font-size: var(--fs-400);
        color: red;
        transition: all .5s;
        font-size: var(--fs-600);
    }
    
    .checkout-btn {
        padding-inline: 2.5rem;
        margin-top: 1rem;
        display: block;
        color: red;
        font-size: var(--fs-400);
        font-weight: 600;
    }

    @media (min-width: 992px) {
        .sidebar {
            display: none;
        }
    }
`

export default Sidebar;
