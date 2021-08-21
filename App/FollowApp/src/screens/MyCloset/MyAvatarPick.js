import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import GridImage from './GridImage';
import Buttons from '../../components/buttons/Button';
import GalleryContext from '../../context/GalleryContext';

const MyAvatarScreenPick = ({navigation, props}) => {
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
        <Container>
            <AvatarModal visible={modalVisible} transparent={true}>
                <ImageViewerContainer>
                    <ImageViewer
                        imageUrls={images}
                        index={recentPicture}
                        onChange={index => setRecentPicture(index)}
                    />
                </ImageViewerContainer>
                <ChooseImageButton2>
                    <Buttons.LongButton
                        title="적용"
                        onPress={() => setModalVisible(false)}
                    />
                </ChooseImageButton2>
            </AvatarModal>
            <GridContainer>{GridImages}</GridContainer>
            <ChooseImageButton1>
                <Buttons.LongButton
                    title="선택 완료"
                    onPress={() => console.log('context 연결해야함.')}
                />
            </ChooseImageButton1>
        </Container>
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
