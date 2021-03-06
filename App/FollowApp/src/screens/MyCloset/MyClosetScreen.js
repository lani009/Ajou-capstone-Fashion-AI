import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Header} from '../../components/HomeScreen/CardViewComponents';

function MyClosetScreen({navigation}) {
    return (
        <View>
            <View style={styles.upBox} />

            <ProfileContainer>
                <ProfileImage
                    source={require('./../../../asset/img/MyCloset/profile.png')}
                />
            </ProfileContainer>

            <Text style={styles.nameText}>주돌이</Text>

            <Text style={styles.emailText}>jkworldchampion@gamil.com</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                    style={styles.boxButton}
                    onPress={() => navigation.navigate('MyClothes')}>
                    <Text style={styles.boxText}>MyCloth</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.boxButton}
                    onPress={() => navigation.navigate('MyLook')}>
                    <Text style={styles.boxText}>MyLook</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                    style={styles.boxButton}
                    onPress={() => navigation.navigate('MyAvatar')}>
                    <Text style={styles.boxText}>MyAvatar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.boxButton}
                    onPress={() => navigation.navigate('TryOn')}>
                    <Text style={styles.boxText}>TryOn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const ProfileContainer = styled.View`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;
const ProfileImage = styled.Image`
    width: 110px;
    height: 110px;
    position: absolute;
`;

const styles = StyleSheet.create({
    boxButton: {
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        padding: 0,
        marginTop: 40,
        borderRadius: 13,
        width: 170,
        height: 150,
    },
    upBox: {
        width: '100%',
        height: '15%',
        backgroundColor: 'black',
    },
    boxText: {
        fontSize: 16.5,
        textAlign: 'center',
        marginTop: 60,
        color: 'white',
    },
    nameText: {
        marginTop: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    emailText: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 15,
        color: 'black',
    },
});

export default MyClosetScreen;
