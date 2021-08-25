import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../screens/SettingScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MyClosetStack from './MyClosetStack';
import HomeStack from './HomeStack';
import ClothSearchStack from './ClothSearchStack';

const Tab = createBottomTabNavigator();

const IndexTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: props => {
                    let name = '';
                    switch (route.name) {
                        case 'Home':
                            name = 'home-outline';
                            break;

                        case 'MyCloset':
                            name = 'wardrobe-outline';
                            break;

                        case 'FindImage':
                            name = 'image-search-outline';
                            break;

                        case 'Setting':
                            name = 'md-settings-outline';
                            return (
                                <IonIcons
                                    name={name}
                                    size={props.size}
                                    color={props.color}
                                />
                            );
                    }
                    return (
                        <MaterialIcon
                            name={name}
                            size={props.size}
                            color={props.color}
                        />
                    );
                },
            })}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="MyCloset" component={MyClosetStack} />
            <Tab.Screen name="FindImage" component={ClothSearchStack} />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    );
};

export default IndexTab;
