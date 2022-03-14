import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
          <h5>
            &copy;
            <span> Jamal Elden</span>
          </h5>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding-block: 20px;
  text-align: center;

  h5 {
    color: #fff;
    font-size: var(--fs-400);
  }
`