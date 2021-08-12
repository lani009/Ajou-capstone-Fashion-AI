import React from 'react';
import MyLook from './MyLook';
import {MyLookProvider} from '../../../context/MyLookContext';

const MyLookScreen = ({navigation}) => {
    return (
        <MyLookProvider>
            <MyLook navigation={navigation} />
        </MyLookProvider>
    );
};

export default MyLookScreen;
