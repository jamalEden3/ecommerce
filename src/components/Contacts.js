import styled from 'styled-components';

const Contacts = () => {
    return (
        <ContactsWrapper className="page">
          <div className="container text-center flow">
                <h2>Let's contact</h2>
                <div className="flow" style={{"--flow-space": "1rem"}}>
                    <p>do not apply, as on the main axis items are treated as a 
                        group. Therefore, the second value will be ignored.
                    </p>
                    <form>
                        <input type="email" placeholder="Drop your email here" />
                        <button type="submit" className="btn sumbit-btn">Subscribe</button>
                    </form>
                </div>
          </div>
        </ContactsWrapper>
    );
};

const ContactsWrapper = styled.section`
    background-color: var(--primary-gold);
    div.conteiner {
        flow-space: 3rem;
    }

`
export default Contacts;