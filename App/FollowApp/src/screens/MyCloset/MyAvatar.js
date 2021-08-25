import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import Buttons from '../../components/buttons/Button';
import {Header} from '../../components/HomeScreen/CardViewComponents';

const MyAvatarScreen = ({navigation}) => {
    return (
        <Container>
            <Header title="Pick Avatar" />
            <ChooseAvatar onPress={() => navigation.navigate('MyAvatarPick')}>
                <ContainerPicture>
                    <PictureBox>
                        <Image 
                            style={{height: '20%', width:'20%'}}
                            source={require('../../../asset/img/MyCloset/MyAvatar/1.png')}/>
                    </PictureBox>
                    <MidLine></MidLine>
                    <PictureBox>
                        <Image 
                            style={{height: '20%', width:'20%'}}
                            source={require('../../../asset/img/MyCloset/MyAvatar/2.png')}/>
                    </PictureBox>
                </ContainerPicture>
                <View>
                    <Text style={{fontSize: 15, marginTop: 30}}>
                        Find your pic which you want to try clothes on.
                    </Text>
                </View>
            </ChooseAvatar>
            <ButtonBox>
                <Buttons.LongButton
                    title='Apply'
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
    background-color: #f5fcff;
    border: 1px;
`;

const ContainerPicture = styled.View`
    flex-direction: row;
    align-items: center;
`;

const PictureBox = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    
`;

const MidLine = styled.View`
    align-self: center;
    border: 1px;
    height: 50px;
    color: #000000;
`;

const ButtonBox = styled.View`
    flex: 0.4;
    align-items: flex-end;
    flex-direction: row;
`;

export default MyAvatarScreen;
