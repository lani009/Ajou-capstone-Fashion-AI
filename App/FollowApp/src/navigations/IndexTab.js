import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../screens/SettingScreen';
import ClothSearch from '../screens/ClothSearch/ClothSearch';
import MyClosetStack from './MyClosetStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const IndexTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="MyCloset" component={MyClosetStack} />
            <Tab.Screen
                name="FindImage"
                component={ClothSearch.FindImageScreen}
            />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    );
};

export default IndexTab;
