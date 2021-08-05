import React from 'react';
import {Text, View} from 'react-native';

const LookDetail = ({route}) => {
    const {top, bottom} = route.params;
    return (
        <View>
            <Text>{top.name}</Text>
            <Text>{bottom.name}</Text>
        </View>
    );
};

export default LookDetail;
