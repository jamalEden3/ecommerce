import styled from 'styled-components';
import hero from '../assets/hero.png';

const Hero = () => {
    return (
        <HeroContainer className="page-100 container grid-container">
            <div className="hero flow">
                <h1 className="fs-900"><span className="fs-200">Store</span>N<span className="half-title">ulia</span></h1>
                <p className="fs-300">
                It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                </p>
                <a className="btn hero-btn btn-before">shop now</a>
            </div>
            <div className="hero-image">
                <img src={hero} />
            </div>
        </HeroContainer>
    );
};

const HeroContainer = styled.section`
    --flow-space: 2rem;
    .hero {
        border: 2px solid #000;
    }
    .half-title {
        color: var(--primary-gold);
    }
    p {
        color: var(--primary-dark);
    }
    .hero-btn {
        border: 3px solid var(--primary-green);
        border-radius: 50px;
        color: var(--primary-green);
        overflow: hiddden;
        padding-inline: var(--p-4);
        padding-block: var(--p-1);
        position: relative;
        z-index: 1;

        &:before {
            position: absolute;
	        height: 100%;
	        font-size: 125%;
	        line-height: 3.5;
	        color: var(--primary-green);
	        -webkit-transition: all 0.3s;
	        -moz-transition: all 0.3s;
            transition: all 0.3s;
            left: 130%;
            top: 0;

            display: flex;
            justify-content: center;
            align-items: center;
        }
        &:hover:before {
            left: 50%;
            top: 50%
        }

        &:hover:before{
            color: #fff;
            left: 80%;
            top: -2px;
        }

        &:hover {
            background-color: var(--primary-green);
            color: var(--primary-white);
        }

        &:active {
            background-color: var(--darkgreen-2);
            border: 3px solid var(--darkgreen-2);
        }

    }
    .hero-image {
        border: 2px solid #808;
    }

`

export default Hero;