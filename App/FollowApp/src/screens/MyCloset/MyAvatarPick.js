import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Image, Text, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import GridImage from './GridImage';
import Buttons from '../../components/buttons/Button';

const images = makeImageGallery();

const MyAvatarScreenPick = ({ navigation, props }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [recentPicture, setRecentPicture] = useState(0);
    let GridImages = []

    for (let i = 0; i < (images.length / 2); i++) {
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
            </GridView>
        )
    }

    return (
        <Container>
            <AvatarModal visible={modalVisible} transparent={true}>
                <ImageViewerContainer>
                    <ImageViewer
                        imageUrls={images}
                        index={recentPicture}
                        onChange={(index) => setRecentPicture(index)}
                    />
                </ImageViewerContainer>
                <ChooseImageButton>
                    <Buttons.LongButton title="적용" onPress={() => setModalVisible(false)} />
                </ChooseImageButton>
            </AvatarModal>
            <GridContainer>
                {GridImages}
            </GridContainer>
            <ChooseImageButton>
                <Buttons.LongButton
                    title="선택 완료"
                    onPress={() => setModalVisible(false)}
                />
            </ChooseImageButton>
        </Container>
    );
}

function makeImageGallery() {
    return [
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar1.png'),
            },
            id: 0,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar2.png'),
            },
            id: 1,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar3.png'),
            },
            id: 2,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar4.png'),
            },
            id: 3,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar5.png'),
            },
            id: 4,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar6.png'),
            },
            id: 5,
        },
    ]
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: white;
    margin: 1px;
`;

const AvatarModal = styled.Modal`
    background-color: black;
    justify-content: center;
`;

const GridContainer = styled.View`
    flex: 4;
    flex-direction: column;
    margin: 1px;
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

const ChooseImageButton = styled.View`
    flex: 0.5;
    flex-direction: row;
    justify-content: center;
    background-color: white;
`;


export default MyAvatarScreenPick;
