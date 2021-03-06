import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as MyCloth from '../screens/MyCloset/MyCloth';
import LookDetail from '../screens/MyCloset/MyLook/LookDetail';

const Stack = createStackNavigator();

const MyClosetStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="MyCloset"
                component={MyCloth.default.MyClosetScreen}
            />
            <Stack.Screen
                name="MyClothes"
                component={MyCloth.default.MyClothesScreen}
            />
            <Stack.Screen
                name="MyAvatar"
                component={MyCloth.default.MyAvatarScreen}
            />
            <Stack.Screen
                name="MyAvatarPick"
                component={MyCloth.default.MyAvatarPick}
            />
            <Stack.Screen
                name="MyLook"
                component={MyCloth.default.MyLookScreen}
            />
            <Stack.Screen
                name="TryOn"
                component={MyCloth.default.TryOnScreen}
            />
            <Stack.Screen name="MyLookDetail" component={LookDetail} />
        </Stack.Navigator>
    );
};

export default MyClosetStack;
