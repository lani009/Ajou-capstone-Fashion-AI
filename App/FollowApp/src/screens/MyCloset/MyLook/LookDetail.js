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

const TextCircleBox = ({text}) => {
    const Container = styled.View`
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: 2px solid black;
        background-color: ${({theme}) => theme.LookDetail.background};
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    `;
    const InnerText = styled.Text`
        font-size: 15px;
        font-weight: bold;
    `;
    return (
        <Container>
            <InnerText>{text}</InnerText>
        </Container>
    );
};

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
                    <TextCircleBox text="상의" />
                    <ClothBox cloth={top} />
                </LookCombination>
                <LookCombination>
                    <TextCircleBox text="하의" />
                    <ClothBox cloth={bottom} />
                </LookCombination>
            </Container>
        </ScrollView>
    );
};

export default LookDetail;
