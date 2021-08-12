import React, {useState} from 'react';
import {Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Buttons from '../../components/buttons/Button';
import MyClothesBottomSheet from '../../components/bottomSheet/MyClothesButtomSheet';
import MyLooksBottomSheet from '../../components/bottomSheet/MyLooksButtomSheet';
import Cloth from '../../object/Cloth';

const WindowHeight = Dimensions.get('window').height / 9;
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
    margin-bottom: ${WindowHeight}px;
    margin-top: 10%;
`;
const ButtonContainer = styled.View`
    flex-direction: row;
`;

const TryOnScreen = ({props}) => {
    const [modalTopVisible, setModalTopVisible] = useState(false);
    const [modalBottomVisible, setModalBottomVisible] = useState(false);
    const [modalLookVisible, setModalLookVisible] = useState(false);
    const [imgData, setImgData] = useState([]);

    const pressMyTopButton = () => {
        setModalTopVisible(true);
    };
    const pressMyButtomButton = () => {
        setModalBottomVisible(true);
    };
    const pressMyLooksButton = () => {
        setModalLookVisible(true);
    };
    const getData = data => {
        setImgData(data);
    };
    const reset = () => {
        setImgData(new Cloth());
        console.log(imgData);
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
            <ButtonContainer>
                <Buttons.MiddleButton
                    title="My Tops"
                    onPress={pressMyTopButton}
                />
                <Buttons.MiddleButton
                    title="My Bottoms"
                    onPress={pressMyButtomButton}
                />
            </ButtonContainer>
            <MyClothesBottomSheet
                modalVisible={modalTopVisible}
                setModalVisible={setModalTopVisible}
                getData={getData}
            />
            <ButtonContainer>
                <Buttons.MiddleButton
                    title="My Looks"
                    onPress={pressMyLooksButton}
                />
                <Buttons.MiddleButton title="Refresh" onPress={reset} />
            </ButtonContainer>
            <MyLooksBottomSheet
                modalVisible={modalLookVisible}
                setModalVisible={setModalLookVisible}
                getData={getData}
            />
        </Container>
    );
};

export default TryOnScreen;
