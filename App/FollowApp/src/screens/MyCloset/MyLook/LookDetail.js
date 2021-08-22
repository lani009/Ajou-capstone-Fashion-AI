import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';

/**
 * 옷 담는 컨테이너 박스
 * @param {Cloth} Cloth객체
 */
const ClothBox = ({cloth}) => {
    const ImageContainer = styled.TouchableOpacity`
        height: 200px;
        width: 200px;
    `;

    const ClothImage = styled.Image`
        height: 200px;
        width: 200px;
    `;
    const ClothBoxContainer = styled.View`
        align-items: center;
        margin-top: 20px;
    `;
    const DescriptionText = styled.Text`
        font-weight: bold;
        font-size: 15px;
    `;
    return (
        <ClothBoxContainer>
            <ImageContainer>
                <ClothImage source={cloth.imgPath} />
            </ImageContainer>
            <DescriptionText>{cloth.name}</DescriptionText>
        </ClothBoxContainer>
    );
};

const TextBox = ({text}) => {
    const Container = styled.View`
        padding-left: 10px;
        padding-right: 10px;
        height: 35px;
        background-color: ${({theme}) => theme.LookDetail.background};
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    `;
    const InnerText = styled.Text`
        font-size: 17px;
        font-weight: bold;
        color: white;
    `;
    return (
        <Container>
            <InnerText>{text}</InnerText>
        </Container>
    );
};

/**
 * LookDetail Screen Component
 * @param {*} route
 */
const LookDetail = ({route}) => {
    const Container = styled.View`
        margin-bottom: 20px;
    `;
    const LookCombination = styled.View`
        margin-top: 40px;
    `;

    const {top, bottom} = route.params;
    return (
        <ScrollView>
            <Container>
                <LookCombination>
                    <TextBox text="TOP" />
                    <ClothBox cloth={top} />
                </LookCombination>
                <LookCombination>
                    <TextBox text="BOTTOM" />
                    <ClothBox cloth={bottom} />
                </LookCombination>
            </Container>
        </ScrollView>
    );
};

export default LookDetail;
