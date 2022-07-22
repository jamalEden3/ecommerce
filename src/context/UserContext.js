import { React,
    useContext, 
    createContext, 
    useEffect, 
    useState
} from 'react';

import { useAuth0 } from "@auth0/auth0-react";





/* create the context */
const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const { user, loginWithRedirect,logout, isAuthenticated } = useAuth0();
    const [myUser, setmyUser] = useState(null);

    useEffect(() => {
        if(isAuthenticated) {
            setmyUser(user);
        } else {
            setmyUser(false)
        }
    }, [isAuthenticated]);
    
    return (
        <UserContext.Provider value={{user, myUser, loginWithRedirect,logout}}>
            { children }
        </UserContext.Provider>
    );
}

/* use the context */
export const useUserContext = () => {
    return useContext(UserContext);
}