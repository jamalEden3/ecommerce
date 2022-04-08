import { useEffect } from 'react';
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

    //hide all body content when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
          document.body.style.overflow = 'hidden';
        }
        return () => {
          document.body.style.overflow = '';
        };
      }, [isSidebarOpen]);
      
    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? 'sidebar pfixed show-sidebar' : 'sidebar pfixed'}`}>
                 <div className="aside-header">
                     <img src="https://img.icons8.com/ios/50/000000/discord.png" className="logo" />
                     <button type="button" className="btn close-btn" onClick={closeSidebar}>
                         <AiOutlineCloseCircle className="fs-700" onClick={closeSidebar} />
                     </button>
                 </div>
                 <ul className="side-list">
                    {
                        links.map(({id, url, name}) => {
                            return (
                                <li key={id}>
                                    <Link to={url} className="side-link fs-700" onClick={closeSidebar}>
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
        width: 100%;
        height: 100vh;
        /* background-color: hsla(var(--faded-dark) / 0.8); */
        background-color: red;
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
        background-color: #fff;
        padding-inline: 2rem;
        height: 5rem;
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
        color: var(--primary-green);
    }

    .logo {
        cursor: pointer;    
    }

    .close-btn {
        font-size: var(--fs-400);
        color: var(--primary-green);
        transition: all .5s;
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
