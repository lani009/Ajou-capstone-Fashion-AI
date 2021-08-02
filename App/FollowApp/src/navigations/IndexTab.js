import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import MyClosetScreen from '../screens/MyCloset/MyClosetScreen';
import ClothSearch from '../screens/ClothSearch/ClothSearch';

const Tab = createBottomTabNavigator();

const IndexTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="" component={HomeScreen} />
            <Tab.Screen name="" component={MyClosetScreen} />
            <Tab.Screen name="" component={ClothSearch.FindImageScreen} />
            <Tab.Screen name="" component={SettingScreen} />
        </Tab.Navigator>
    );
};

export default IndexTab;
