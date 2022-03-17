import React from 'react';
import aboutImage from '../assets/about.jpg';
import styled from 'styled-components';
import BreadCrumbs from '../components/BreadCrumbs';

const AboutPage = () => {
    return (
        <main className="page">
            <BreadCrumbs title="About" />
            <AboutContainer>
                <img src={aboutImage} alt="about" />
                <article>
                    <h1 className="fs-700">Our Story</h1>
                    <p className="fs-200">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like readable English.
                    </p>
                </article>
            </AboutContainer>
        </main>
    );
};

const AboutContainer = styled.section`
    display: grid;

    img {
        height: 400px;
        object-fit: cover;
    }
`

export default AboutPage;