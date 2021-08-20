import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Image, Text, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import GridImage from './GridImage';
import Buttons from '../../components/buttons/Button';

const images = makeImageGallery();

const MyAvatarScreenPick = ({ navigation, props }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [recentPicture, setRecentPicture] = useState(null);
    let GridImages = []

    for (let i = 0; i < (images.length / 2); i++) {
        GridImages.push(
            <GridView>
                <GridImage
                    source={images[2 * i].props.source}
                    setRecentPicture={setRecentPicture}
                    setModalVisible={setModalVisible}
                />
                <GridImage
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
                <ImageViewer imageUrls={images} />
                <Buttons title="적용" onPress={() => setModalVisible(false)} />
            </AvatarModal>
            <GridContainer>
                {GridImages}
            </GridContainer>
            <Buttons
                title="선택 완료"
                onPress={() => setModalVisible(false)}
            />
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
            id: 1,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar2.png'),
            },
            id: 2,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar3.png'),
            },
            id: 3,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar4.png'),
            },
            id: 4,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar5.png'),
            },
            id: 5,
        },
        {
            url: '',
            props: {
                source: require('./Image/avatar/avatar6.png'),
            },
            id: 6,
        },
    ]
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const AvatarModal = styled.Modal`
  background-color: black;
`;

const GridView = styled.View`
  flex: 1;
  flex-direction: row;
`;

const GridContainer = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 1px;
`;

export default MyAvatarScreenPick;

