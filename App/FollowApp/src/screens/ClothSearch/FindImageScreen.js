import React, {useState} from 'react';
import {Image, Dimensions, Alert} from 'react-native';
import styled from 'styled-components/native';
import Buttons from '../../components/buttons/Button';
import MyClothesModal from '../../components/FindImageScreen/bottomSheet/MyClothesModal';
import {
    FindImageProvider,
    FindImageConsumer,
} from '../../context/FindImageContext';
import {Header} from '../../components/HomeScreen/CardViewComponents';

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

const FindImageScreen = ({navigation}) => {
    const [modalClothesVisible, setModalClothesVisible] = useState(false);

    const pressMyClothesButton = () => {
        setModalClothesVisible(true);
    };

    return (
        <FindImageProvider>
            <FindImageConsumer>
                {({state, actions}) => (
                    <Container>
                        <Header title="Search"/>
                        <AvatarView>
                            <Image
                                source={state.clothes.imgPath}
                                resizeMode="contain"
                            />
                        </AvatarView>
                        <ButtonContainer>
                            <Buttons.MiddleButton
                                title="My Closet"
                                onPress={pressMyClothesButton}
                            />
                            <Buttons.MiddleButton
                                title="Reset"
                                onPress={() => {
                                    actions.setClothes('undefined');
                                }}
                            />
                        </ButtonContainer>
                        <MyClothesModal
                            modalVisible={modalClothesVisible}
                            setModalVisible={setModalClothesVisible}
                        />
                        <ButtonContainer>
                            <Buttons.LongButton
                                title="search"
                                onPress={() => {
                                    if(state.clothes.id ==='bottom1'){
                                        navigation.navigate('SearchResult');

                                    }else{
                                        Alert.alert("검색 결과","결과를 찾을 수 없습니다.");
                                    }
                                }}
                            />
                        </ButtonContainer>
                    </Container>
                )}
            </FindImageConsumer>
        </FindImageProvider>
    );
};

export default FindImageScreen;
