import styled from 'styled-components';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

const CountController = ({count, increase, decrease}) => {
    return (
        <CountControllerWrapper>
            <button onClick={increase}>
                <AiOutlinePlusCircle />
            </button>
            {count}
            <button onClick={decrease}>
                <AiOutlineMinusSquare />
            </button>
        </CountControllerWrapper>
    );
};

export default CountController;

const CountControllerWrapper = styled.div`

`