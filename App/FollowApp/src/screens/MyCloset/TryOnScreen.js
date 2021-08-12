import React, {useState} from 'react';
import {Image} from 'react-native';
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
    const [imgData, setImgData] = useState('');
    const getData = data => {
        setImgData(data);
    };

    return (
        <Container>
            <AvatarView>
                <Image
                    source={imgData.imgPath}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                    }}
                />
            </AvatarView>
            <Buttons.LongButton
                title="My Clothes"
                onPress={pressMyClothesButton}
            />
            <MyClothesBottomSheet
                modalVisible={modalOneVisible}
                setModalVisible={setModalOneVisible}
                getData={getData}
            />

            <Buttons.LongButton title="My Looks" onPress={pressMyLooksButton} />
            <MyLooksBottomSheet
                modalVisible={modalTwoVisible}
                setModalVisible={setModalTwoVisible}
                getData={getData}
            />
        </Container>
    );
};

export default TryOnScreen;
