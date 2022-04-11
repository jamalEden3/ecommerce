import styled from 'styled-components';
import { useFilteredProductsContext } from '../context/FilteredProductsContext';

import GridGallery from './GridGallery';
import ListGallery from './ListGallery';

const ProductList = () => {
    const {allProducts: products, gridGallery} = useFilteredProductsContext();
    if (products.length < 1) {
        return (
            <h2>Sorry, non of your products found!</h2>
        )
    }

    if (gridGallery === false) {
        return <ListGallery products={products} />
    }
    return (
           <GridGallery products={products}>Product list</GridGallery>
    );
};

const ProductListWrapper = styled.section`

`

export default ProductList;