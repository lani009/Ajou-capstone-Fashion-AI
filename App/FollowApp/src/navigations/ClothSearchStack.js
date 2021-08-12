import React from 'react';
import createStackNavigator from '@react-navigation/stack';
import {
    FindImageScreen,
    ClothSearchResultScreen,
} from './../screens/ClothSearch/ClothSearch';

const Stack = createStackNavigator();

const ClothSearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FindImage" component={FindImageScreen} />
            <Stack.Screen
                name="ClothSearchResult"
                component={ClothSearchResultScreen}
            />
        </Stack.Navigator>
    );
};

export default ClothSearchStack;
