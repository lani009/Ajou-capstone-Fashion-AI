import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Stack = createStackNavigator();

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const LoginScreen = () => {
    return (
        <Container>
            <Text>Hi This is Login Page</Text>
        </Container>
    );
};

const LoginStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default LoginStack;
