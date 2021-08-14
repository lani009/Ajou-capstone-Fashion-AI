import React, {useState} from 'react';
import {Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Buttons from '../../components/buttons/Button';
import MyTopModal from '../../components/tryonScreen/bottomSheet/MyTopModal';
import MyLooksModal from '../../components/tryonScreen/bottomSheet/MyLooksModal';
import MyBottomModal from '../../components/tryonScreen/bottomSheet/MyBottomModal';
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
    const SelectedID = state => {
        console.log('SelectedId');
        console.log(state.top);
        console.log(state.bottom);
    };
    return (
        <MySelectionProvider>
            <MySelectionConsumer>
                {({state, actions}) => (
                    <Container>
                        <AvatarView>
                            <Image source={state.top.imgPath} />
                            <Image source={state.bottom.imgPath} />
                            {SelectedID(state)}
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
                        <MyTopModal
                            modalVisible={modalTopVisible}
                            setModalVisible={setModalTopVisible}
                        />
                        <MyBottomModal
                            modalVisible={modalBottomVisible}
                            setModalVisible={setModalBottomVisible}
                        />
                        <ButtonContainer>
                            <Buttons.MiddleButton
                                title="My Looks"
                                onPress={pressMyLooksButton}
                            />

                            <Buttons.MiddleButton
                                title="Reset"
                                onPress={() => {
                                    actions.setTop(undefined);
                                    actions.setBottom(undefined);
                                }}
                            />
                        </ButtonContainer>
                        <MyLooksModal
                            modalVisible={modalLookVisible}
                            setModalVisible={setModalLookVisible}
                        />
                    </Container>
                )}
            </MySelectionConsumer>
        </MySelectionProvider>
    );
};

export default TryOnScreen;
