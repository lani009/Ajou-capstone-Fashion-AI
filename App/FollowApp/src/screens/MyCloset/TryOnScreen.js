import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Buttons from '../../components/buttons/Button';
import MyClothesBottomSheet from '../../components/bottomSheet/MyClothesButtomSheet';
import MyLooksBottomSheet from '../../components/bottomSheet/MyLooksButtomSheet';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;
const AvatarView = styled.View`
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 50%;
    border: 1px;
    margin-bottom: 20%;
    margin-top: 10%;
`;

const TryOnScreen = ({props}) => {
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    const pressMyClothesButton = () => {
        setModalOneVisible(true);
    };
    const pressMyLooksButton = () => {
        setModalTwoVisible(true);
    };
    return (
        <Container>
            <AvatarView></AvatarView>
            <Buttons.LongButton
                title="My Clothes"
                onPress={pressMyClothesButton}
            />
            <MyClothesBottomSheet
                modalVisible={modalOneVisible}
                setModalVisible={setModalOneVisible}
            />
            <Buttons.LongButton title="My Looks" onPress={pressMyLooksButton} />
            <MyLooksBottomSheet
                modalVisible={modalTwoVisible}
                setModalVisible={setModalTwoVisible}
            />
        </Container>
    );
};

export default TryOnScreen;
