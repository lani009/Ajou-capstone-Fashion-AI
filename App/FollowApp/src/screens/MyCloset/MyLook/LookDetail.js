import React from 'react';
import styled from 'styled-components';

const Container = styled.View``;
const ImageContainer = styled.TouchableOpacity`
    margin-left: 10px;
    height: 100px;
    width: 100px;
`;

const ClothImage = styled.Image`
    height: 100px;
    width: 100px;
`;

const ClothBox = ({cloth}) => {
    const ClothBoxContainer = styled.View``;
    const TextContainer = styled.View``;
    const TitleText = styled.Text``;
    const DescriptionText = styled.Text``;
    return (
        <ClothBoxContainer>
            <ImageContainer>
                {/* <ClothImage source={cloth.imgPath} /> */}
                <ClothImage
                    source={require('../../../../asset/test/TryOn/Clothes/2.png')}
                />
            </ImageContainer>
            <TextContainer>
                <TitleText>{cloth.type}</TitleText>
                <DescriptionText>{cloth.name}</DescriptionText>
            </TextContainer>
        </ClothBoxContainer>
    );
};

const LookDetail = ({route}) => {
    const {top, bottom} = route.params;
    return (
        <Container>
            <ClothBox cloth={top} />
            <ClothBox cloth={bottom} />
        </Container>
    );
};

export default LookDetail;
