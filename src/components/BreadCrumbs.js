import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadCrumbs = ({ title, product }) => {
    return (
       <BreadCrumbsWrapper>
        <div>
            <h2>
                <Link to='/'>Home</Link> / {product ? <Link to="/products">Products /</Link>: ''} {title}
            </h2>
        </div>
       </BreadCrumbsWrapper>
    );
};

const BreadCrumbsWrapper = styled.div`
    background-color: red;
`
export default BreadCrumbs;