import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import Buttons from '../../components/buttons/Button';
<<<<<<< Updated upstream
=======
import GalleryContext from '../../context/GalleryContext';
import {AvatarContext} from '../../context/AvatarContext';
import {Header} from '../../components/HomeScreen/CardViewComponents';
>>>>>>> Stashed changes


const MyAvatarScreen = ({navigation}) => {
    const images = useContext(GalleryContext.AvatarImgContext);
    const avatarNow = useContext(AvatarContext).myAvatar

    return (
        <Container>
            <ChooseAvatar onPress={() => navigation.navigate('MyAvatarPick')}>
                <ContainerPicture>
                    <PictureBox>
                        <Image 
                            style={{height: '30%', width:'30%'}}
                            source={require('../../../asset/img/MyCloset/MyAvatar/gallery-880815_640.png')}/>
                    </PictureBox>
                    <MidLine></MidLine>
                    <PictureBox>
                        <Image 
                            style={{height: '30%', width:'30%'}}
                            source={require('../../../asset/img/MyCloset/MyAvatar/photo-camera-2027073_640.png')}/>
                    </PictureBox>
                </ContainerPicture>
                <View>
                    <Text style={{fontSize: 15, marginTop: 30}}>
                        Find your pic which you want to try clothes on.
                    </Text>
                </View>
            </ChooseAvatar>
            <ButtonBox>
<<<<<<< Updated upstream
                <Buttons.LongButton
                    title="적용"
                    onPress={() => alert('아바타 변경 완료')}
                />
=======
                <Text>현재 아바타</Text>
                <AvatarContext.Consumer>
                    {(myAvatar) => (
                        <Image 
                        style={{height: '30%', width:'30%'}}
                        source={images[myAvatar].props.source}/>
                    )}
                </AvatarContext.Consumer>
>>>>>>> Stashed changes
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
    margin: 20px;
`;

const PictureBox = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const MidLine = styled.View`
    margin-top: 37px;
    border: 1px;
    height: 50px;
    color: #000000;
`;

const ButtonBox = styled.View`
    flex: 0.65;
    align-items: flex-end;
    flex-direction: column;
`;

export default MyAvatarScreen;
