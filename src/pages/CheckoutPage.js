import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from '../components/BreadCrumbs';

const CheckoutPage = () => {
    return (
        <main>
            <BreadCrumbs title="Checkout" />
            <CheckoutContainer>
                Checkout will be here
            </CheckoutContainer>
        </main>
    );
};

const CheckoutContainer = styled.section`
    
`

export default CheckoutPage;