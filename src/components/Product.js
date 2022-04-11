import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const Product = ({ image, name, price, id }) => {
    return (
       <ProductWrapper>
           <Link to={`products/${id}`}>
            <img src={image} alt='prsoduct' />
           </Link>
           <h3>{name}</h3>
           <p>{formatPrice(price)}</p>
       </ProductWrapper>
    );
};

const ProductWrapper = styled.div`
    color: green;

    img {
        width: 100px;
        height: 100px
    }
`
export default Product;