import React from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';
import MyCloth from './MyCloth';
import MyLookScreen from './MyLookScreen';
import MyAvatarScreen from './MyAvatar';
import TryOnScreen from './TryOnScreen';
import Navigation from '../../navigations/navigation';


const MyClosetScreen = () => {
    return (
        <View>
            <View
                style={{width: 400, height: 150, backgroundColor: 'skyblue'}}
            />
            <Image
                source={require('./Image/12.png')}
                style= {styles.container}
            />
            <Text
                style= {{marginTop: 60, marginLeft:170, fontWeight: 'bold', fontSize: 20, color: 'steelblue'}}>
                주돌이
            </Text>
            <Text
                style= {{marginTop: 10, marginLeft:100, fontWeight: 'normal', fontSize: 15, color: 'steelblue'}}>
                jkworldchampion@gamil.com
            </Text>

            <Button
                title="Press me"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        width: 110,
        height: 110,
        position: 'absolute',
        marginTop: 100,
        marginLeft: 140
        
    },
});

export default MyClosetScreen;
