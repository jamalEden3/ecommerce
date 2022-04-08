import styled from 'styled-components';
import{ services } from '../utils/constants';

const Services = () => {
    return (
        <ServicesWrapper className="page-100">
          <div className="container s-center flow">
                <article className="services-header flow">
                    <h2>Our services</h2> 
                    <p>lorem vLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out </p>
                </article>
                <div className="services">
                    {
                        services.map(({id, icon, name, desc}) => (
                            <article key={id} className="service">
                                <span>{icon}</span>
                                <h3>{name}</h3>
                                <p>{desc}</p>
                            </article>
                        ))
                    }
                </div>
          </div>
        </ServicesWrapper>
    );
};

const ServicesWrapper = styled.section`
    background-color: var(--white);
    border: 1px dotted red;
    overflow: hidden;
    --flow-space: 2rem;

    .services-header {
        text-align: center;
        --flow-space: 1rem;
    }

    .services {
        display: grid;
        gap: 1.5rem;
    }

    .service {
        border: 2px solid #000;
    }

    @media (min-width: 576px) {
        .services {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
`

export default Services;