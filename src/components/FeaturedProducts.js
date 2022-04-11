import styled from 'styled-components';
import { useProductsContext } from '../context/ProductsContext';
import Loading from '../components/Loading';
import Error from '../components/Error';

import Product from '../components/Product';

const FeaturedProducts = () => {
    const data = useProductsContext();
    const { featuredProducts: fproducts, productsLoading: loading, productsError :error } = data;

    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <Error />
    }
    return (
        <FeaturedProductsWrapper className="container">
            {fproducts.slice(0, 3).map((product) => 
                <Product key={product.id} {...product}/>
            )}
        </FeaturedProductsWrapper>
    );
};

export default FeaturedProducts;

const FeaturedProductsWrapper = styled.section`
    color: red;
`