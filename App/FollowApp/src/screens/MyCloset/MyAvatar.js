import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Buttons from '../../components/buttons/Button';

// import { useEffect } from 'react';

const MyAvatarScreen = ({navigation}) => {
    return (
        <Container>
            <ChooseAvatar onPress={() => navigation.navigate('MyAvatarPick')}>
                <View style={{flexDirection: 'row', margin: 20 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 30} }>🖼</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30 }}>📷</Text>
                    </View>
                </View>
                <View>
                    <Text>Find your pic which you want to try clothes on.</Text>
                </View>
            </ChooseAvatar>
            <View style={{ flex: 0.4, alignItems: 'flex-end', flexDirection:'row'}}>
                <Buttons.LongButton
                    title="적용"
                    onPress={() => alert('아바타 변경 완료')}
                />
            </View>
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const ChooseAvatar = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F5FCFF;
    border: 1px;
`;

const leftBox = styled.View`
    
`;

const rightBox = styled.View`
    flex:1;
`;
export default MyAvatarScreen;
