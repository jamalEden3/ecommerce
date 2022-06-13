import styled from 'styled-components';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

const CountControllers = ({count, increase, decrease}) => {
    return (
        <CountControllersWrapper>
            <button onClick={increase}>
                <AiOutlinePlusCircle />
            </button>
            {count}
            <button onClick={decrease}>
                <AiOutlineMinusSquare />
            </button>
        </CountControllersWrapper>
    );
};


const CountControllersWrapper = styled.div`

`
export default CountControllers;