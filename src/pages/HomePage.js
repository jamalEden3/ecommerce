import React from 'react';
import styled from 'styled-components';

/* components */
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contacts from '../components/Contacts';
import FeaturedProducts from '../components/FeaturedProducts';

const Homepage = () => {
    return (
        <HomeContainer>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contacts />
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    margin-top: 5rem;
`


export default Homepage;