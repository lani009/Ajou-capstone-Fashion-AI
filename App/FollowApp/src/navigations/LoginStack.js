import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import LongButton from '../components/buttons/Button';

const Stack = createStackNavigator();

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    color: black;
`;

const LoginScreen = () => {
    const props = {
        title: 'hi',
        onPress: () => {},
    };
    return (
        <Container>
            <Text>Hi This is Login Page😃</Text>
        </Container>
    );
};

const LoginStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default LoginStack;
