import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as MyCloth from '../screens/MyCloset/MyCloth';

const Stack = createStackNavigator();

const MyClosetStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="" component={MyCloth.default.MyAvatarScreen} />
            <Stack.Screen name="" component={MyCloth.default.MyClosetScreen} />
            <Stack.Screen name="" component={MyCloth.default.MyClothesScreen} />
            <Stack.Screen name="" component={MyCloth.default.MyLookScreen} />
            <Stack.Screen name="" component={MyCloth.default.TryOnScreen} />
        </Stack.Navigator>
    );
};

export default MyClosetStack;
