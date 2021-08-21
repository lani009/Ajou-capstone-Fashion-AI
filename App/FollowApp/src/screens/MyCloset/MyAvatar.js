import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Buttons from '../../components/buttons/Button';

// import { useEffect } from 'react';

const MyAvatarScreen = ({ navigation }) => {
    return (
        <Container>
            <ChooseAvatar onPress={() => navigation.navigate('MyAvatarPick')}>
                <ContainerPicture>
                    <PictureBox>
                        <Text style={{ fontSize: 33 }}>🖼</Text>
                    </PictureBox>
                    <MidLine></MidLine>
                    <PictureBox>
                        <Text style={{ fontSize: 33 }}>📷</Text>
                    </PictureBox>
                </ContainerPicture>
                <View>
                    <Text style={{fontSize: 15, marginTop: 30}}>Find your pic which you want to try clothes on.</Text>
                </View>
            </ChooseAvatar>
            <ButtonBox>
                <Buttons.LongButton
                    title="적용"
                    onPress={() => alert('아바타 변경 완료')}
                />
            </ButtonBox>
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

const ContainerPicture = styled.View`
    flex-direction: row;
    margin: 20px;
`;

const PictureBox = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const MidLine = styled.View`
    margin-top: 5px;
    border: 1px;
    height: 45px;
    color: #000000
`;

const ButtonBox = styled.View`
    flex: 0.4;
    align-items: flex-end;
    flex-direction: row;
`;

export default MyAvatarScreen;
