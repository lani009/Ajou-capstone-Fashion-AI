import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './LoginStack';

const Navigation = () => {
    return (
        <NavigationContainer>
            <LoginStack />
        </NavigationContainer>
    );
};

export default Navigation;
