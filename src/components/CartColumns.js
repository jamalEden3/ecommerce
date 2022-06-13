import styled from 'styled-components';

const CartColumns = () => {
    return (
        <CartColumnsWrapper>
          <h5>title</h5>
          <h5>price</h5>
          <h5>quantity</h5>
          <h5>sub total</h5>
        </CartColumnsWrapper>
    );
};

const CartColumnsWrapper = styled.section`
    display: flex;
    border: 2px solid #000;
    font-size: 20px;
    
    h5 {
        margin: 0 30px;
    }
`
export default CartColumns;