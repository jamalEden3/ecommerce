import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from '../components/BreadCrumbs';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';

const ProductsPage = () => {
    return (
        <>
            <BreadCrumbs title='products' />
            <ProductsPageWrapper>
                <div>
                    Filter
                </div>
                <div>
                    <Sort />
                    <ProductList />
                </div>
            </ProductsPageWrapper>
        </>
    );
};

export default ProductsPage;
const ProductsPageWrapper = styled.main`
    margin-top: 5rem
`