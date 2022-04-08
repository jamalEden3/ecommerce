import React from 'react';
import styled from 'styled-components';

/* components */
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contacts from '../components/Contacts';

const Homepage = () => {
    return (
        <HomeContainer>
            <Hero />
            <Services />
            <Contacts />
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    margin-top: 5rem;
`


export default Homepage;