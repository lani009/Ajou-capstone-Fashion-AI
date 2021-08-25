import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import Buttons from '../../components/buttons/Button';
import {Header} from '../../components/HomeScreen/CardViewComponents';
import {
    AvatarConsumer,
    AvatarProvider,
} from '../../context/avatar/AvatarSelectedContext';

const MyAvatarScreen = function ({navigation}) {
    console.log('this is my avatar');
    const [, updateThis] = useState();
    const GalleryIcon = () => {
        return (
            <ContainerPicture>
                <PictureBox>
                    <Image
                        style={{
                            height: '30%',
                            width: '30%',
                        }}
                        source={require('../../../asset/img/MyCloset/MyAvatar/1.png')}
                    />
                </PictureBox>
                <MidLine></MidLine>
                <PictureBox>
                    <Image
                        style={{
                            height: '30%',
                            width: '30%',
                        }}
                        source={require('../../../asset/img/MyCloset/MyAvatar/2.png')}
                    />
                </PictureBox>
            </ContainerPicture>
        );
    };

    const SelectedImage = styled.Image`
        flex: 1;
        resize-mode: contain;
    `;
    return (
        <AvatarProvider>
            <AvatarConsumer>
                {({state, actions}) => {
                    return (
                        <Container>
                            <Header title="Pick Avatar" />
                            <ChooseAvatar
                                onPress={() =>
                                    navigation.navigate('MyAvatarPick', {
                                        myAvatarObject: updateThis,
                                        dispatchAvatar: actions.setAvatar,
                                    })
                                }>
                                {state.avatar === '' ? (
                                    <GalleryIcon />
                                ) : (
                                    <SelectedImage source={state.avatar} />
                                )}
                            </ChooseAvatar>
                            <ButtonBox>
                                <Buttons.LongButton
                                    title="Apply"
                                    onPress={() => alert('아바타 변경 완료')}
                                />
                            </ButtonBox>
                        </Container>
                    );
                }}
            </AvatarConsumer>
        </AvatarProvider>
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
