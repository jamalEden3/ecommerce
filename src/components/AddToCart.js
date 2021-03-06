import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiCheck } from "react-icons/bi";
import CountControllers from './CountControllers';
import { useCartContext } from '../context/CartContext';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext();
    const { stock, colors, id } = product;
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const [productCount, setProductCount] = useState(1);

    const increaseCount = () => {
        setProductCount((oldCount) => {
            let count = oldCount + 1;
            if(count  > stock) {
                count = stock
            }
            return count;
        });
    }
    const decreaseCount = () => {
        setProductCount((oldCount)=> {
            let count = oldCount - 1;
            if(count < 1) {
                count = 1
            }
            return count;
        });
    }
    return (
       <AddToCartWrapper>
           <div>
               <p>Colors:</p>
               <div className="colors">
                {
                    colors.map((color, index) => 
                    <button 
                        key={index}
                        style={{backgroundColor: color, color:'#fff'}}
                        className={`${ currentColor === color ? 'color-btn active' : 'color-btn' }`}
                        onClick={() => setCurrentColor(color)}>
                        {currentColor === color ? <BiCheck /> : null}
                    </button>)
                }
               </div>
           </div>

           <div>
               <CountControllers count={productCount} increase={increaseCount} decrease={decreaseCount} />
               <Link to="/cart" onClick={() => addToCart(id, currentColor, productCount, product)}>
                   Go to cart
               </Link>
           </div>

       </AddToCartWrapper>
    );
};


const AddToCartWrapper = styled.div`
    .color-btn {
        width :40px;
        height: 40px;
        opacity: .5
    }
    .active {
        opacity: 1
    }
    `
export default AddToCart;