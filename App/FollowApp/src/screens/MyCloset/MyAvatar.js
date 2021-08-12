import React from 'react';
import styled from 'styled-components';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Buttons from '../../components/buttons/Button';
// import { useEffect } from 'react';
//

const MyAvatarScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('MyAvatarPick')} style={styles.avatar}>
                <Image source={require('./img/avatar/avatar1.png')} />
            </TouchableOpacity>
            <Buttons.LongButton
                title="적용"
                onPress={() => alert("아바타 변경 완료")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    avatar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})

export default MyAvatarScreen;


