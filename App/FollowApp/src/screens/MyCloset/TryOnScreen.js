import React, {useState} from 'react';
import {Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Buttons from '../../components/buttons/Button';
import MyTopBottomSheet from '../../components/tryonScreen/bottomSheet/MyTopButtomSheet';
import MyLooksBottomSheet from '../../components/tryonScreen/bottomSheet/MyLooksButtomSheet';
import MyBottomBottomSheet from '../../components/tryonScreen/bottomSheet/MyBottomButtomSheet';
import {
    MySelectionConsumer,
    MySelectionProvider,
} from '../../context/MySelectionContext';

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
const SelectedID = () => {
    console.log('SelectedId');
    return (
        <MySelectionConsumer>
            {({state}) => {
                console.log(state.top);
                console.log(state.bottom);
            }}
        </MySelectionConsumer>
    );
};
const TryOnScreen = ({props}) => {
    const [modalTopVisible, setModalTopVisible] = useState(false);
    const [modalBottomVisible, setModalBottomVisible] = useState(false);
    const [modalLookVisible, setModalLookVisible] = useState(false);

    const pressMyTopButton = () => {
        setModalTopVisible(true);
    };
    const pressMyButtomButton = () => {
        setModalBottomVisible(true);
    };
    const pressMyLooksButton = () => {
        setModalLookVisible(true);
    };
    return (
        <MySelectionProvider>
            <Container>
                <MySelectionConsumer>
                    {({state}) => (
                        <AvatarView>
                            <Image source={state.top.imgPath} />
                            <Image source={state.bottom.imgPath} />
                            <SelectedID />
                        </AvatarView>
                    )}
                </MySelectionConsumer>
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
                <MyTopBottomSheet
                    modalVisible={modalTopVisible}
                    setModalVisible={setModalTopVisible}
                />
                <MyBottomBottomSheet
                    modalVisible={modalBottomVisible}
                    setModalVisible={setModalBottomVisible}
                />
                <ButtonContainer>
                    <Buttons.MiddleButton
                        title="My Looks"
                        onPress={pressMyLooksButton}
                    />
                    <MySelectionConsumer>
                        {({actions}) => (
                            <Buttons.MiddleButton
                                title="Refresh"
                                onPress={() => {
                                    actions.setTop(undefined);
                                    actions.setBottom(undefined);
                                }}
                            />
                        )}
                    </MySelectionConsumer>
                </ButtonContainer>
                <MyLooksBottomSheet
                    modalVisible={modalLookVisible}
                    setModalVisible={setModalLookVisible}
                />
            </Container>
        </MySelectionProvider>
    );
};

export default TryOnScreen;
