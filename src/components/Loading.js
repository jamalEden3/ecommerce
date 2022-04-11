import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadingContainer className="container">
          Loading
        </LoadingContainer>
    );
};

export default Loading;

const LoadingContainer = styled.section`
    color: red;
    font-size: 5rem
`