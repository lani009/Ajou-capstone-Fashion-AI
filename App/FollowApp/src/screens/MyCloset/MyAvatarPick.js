import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import GridImage from './GridImage';
import Buttons from '../../components/buttons/Button';
import GalleryContext from '../../context/GalleryContext';
import {Header} from '../../components/HomeScreen/CardViewComponents';
import {
    AvatarConsumer,
    AvatarProvider,
} from '../../context/avatar/AvatarSelectedContext';
import {Alert} from 'react-native';

let countable = 0;

const MyAvatarScreenPick = ({navigation, route, props}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [recentPicture, setRecentPicture] = useState(0);
    const images = useContext(GalleryContext.AvatarImgContext);

    let GridImages = [];
    for (let i = 0; i < images.length / 2; i++) {
        GridImages.push(
            <GridView>
                <GridImage
                    id={images[2 * i].id}
                    source={images[2 * i].props.source}
                    setRecentPicture={setRecentPicture}
                    setModalVisible={setModalVisible}
                />
                <GridImage
                    id={images[2 * i + 1].id}
                    source={images[2 * i + 1].props.source}
                    setRecentPicture={setRecentPicture}
                    setModalVisible={setModalVisible}
                />
            </GridView>,
        );
    }

    return (
        <AvatarProvider>
            <AvatarConsumer>
                {({state}) => (
                    <Container>
                        <Header title="Gallery" />
                        <AvatarModal visible={modalVisible} transparent={true}>
                            <ImageViewerContainer>
                                <ImageViewer
                                    imageUrls={images}
                                    index={recentPicture}
                                    onChange={id => setRecentPicture(id)}
                                />
                            </ImageViewerContainer>
                            <ChooseImageButton2>
                                <Buttons.LongButton
                                    title="Apply"
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                />
                            </ChooseImageButton2>
                        </AvatarModal>
                        <GridContainer>{GridImages}</GridContainer>
                        <ChooseImageButton1>
                            <Buttons.LongButton
                                title="선택 완료"
                                onPress={() => {
                                    if (state.avatar === '') {
                                        Alert.alert('선택된 사진이 없습니다.');
                                    } else {
                                        navigation.navigate('MyAvatar');
                                        route.params.dispatchAvatar(state.avatar);
                                        route.params.myAvatarObject(
                                            countable++,
                                        );
                                    }
                                }}
                            />
                        </ChooseImageButton1>
                    </Container>
                )}
            </AvatarConsumer>
        </AvatarProvider>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: white;
    margin-top: 1px;
`;

const AvatarModal = styled.Modal`
    background-color: black;
    justify-content: center;
`;

const GridContainer = styled.View`
    flex: 4;
    flex-direction: column;
    margin: 0.5px;
    border: 1px solid black;
`;

const GridView = styled.View`
    flex: 1;
    flex-direction: row;
`;

const ImageViewerContainer = styled.View`
    flex: 4;
    background-color: black;
`;

const ChooseImageButton1 = styled.View`
    flex: 0.5;
    flex-direction: row;
    justify-content: center;
    background-color: white;
`;

const ChooseImageButton2 = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    background-color: black;
`;

export default MyAvatarScreenPick;
