import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Image, Text, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components';
import ImageViewer from 'react-native-image-zoom-viewer';
import GridImage from './GridImage';
import Buttons from '../../components/buttons/Button';

const MyAvatarScreenPick = ({ navigation, props }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [images, setImages] = useState([]);
    const [recentPicture, setRecentPicture] = useState(null);

    const amountPicture = 2; // 우리가 넣은 사진 갯수 ㅎㅎ..
    let imageGallery = [];

    useEffect(() => {
        for (let i = 0; i < amountPicture; i++) {
            imageGallery.push(
                {
                    url: '',
                    props: {
                        source: './image/avatar/avatar' + (i + 1) + '.png',
                    },
                    id: i,
                }
            );
        }
        setImages(imageGallery);

        console.log(images);
    }, []);

    return (
        <Container>
            <AvatarModal visible={modalVisible} transparent={true}>
                <ImageViewer imageUrls={images} />
                <Buttons.LongButton title="적용" onPress={() => setModalVisible(false)} />
            </AvatarModal>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <GridContainer>
                        <GridImage
                            source={item.props.source}
                            setRecentPicture={setRecentPicture}
                            setModalVisible={setModalVisible}
                        />
                    </GridContainer>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index}
            />
            <Buttons.LongButton
                title="선택 완료"
                onPress={() => setModalVisible(false)}
            />
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color: white;
`;

const AvatarModal = styled.Modal`
    background-color: black;
`;

const GridContainer = styled.View`
    flex: 1;
    flex-direction: column;
    margin: 1px;
`;

export default MyAvatarScreenPick;

