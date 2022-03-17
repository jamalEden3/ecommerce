import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
    return (
        <ErrorContainer className="page">
            <div className="error-text flow">
                <h1 className="fs-900">404</h1>
                <h3 className="fs-500">Sorry, the page not found!</h3>
                <Link to="/" className="btn back-btn">back home</Link>
            </div>
        </ErrorContainer>
    );
};

const ErrorContainer = styled.section`
    
    display: grid;
    place-items: center;
    .error-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        --flow-space: 2rem;
    }
    .back-btn {
        background-color: yellow;
        border-radius: 3rem;
    }
`

export default Error;