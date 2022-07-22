import styled from 'styled-components';

import { Redirect, Route } from 'react-router-dom';

import { useUserContext } from '../context/UserContext';
const PrivateRoute = ({children, ...rest}) => {
    const { myUser } = useUserContext();

    return (
        <Route {...rest} render={() => {
            return myUser ? children : <Redirect to='/'></Redirect>
        }} />
    );
};

const HomeContainer = styled.div`
    margin-top: 5rem;
`


export default PrivateRoute;