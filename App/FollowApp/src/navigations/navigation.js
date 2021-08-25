import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './LoginStack';
import {UserContext} from '../context/UserContext';
import IndexTab from './IndexTab';

const Navigation = () => {
    const userContext = useContext(UserContext);
    console.log(userContext);
    return (
        <NavigationContainer>
            {userContext.user.isLoggedIn ? <IndexTab /> : <LoginStack />}
        </NavigationContainer>
    );
};

export default Navigation;
