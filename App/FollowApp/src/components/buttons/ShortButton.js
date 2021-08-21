import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const WindowWidth = Dimensions.get('window').width / 5;
const ButtonContainer = styled.TouchableOpacity`
    border-radius: 40px;
    align-items: center;
    padding: 0px 0px;
    margin: 20px 20px;
    justify-content: center;
    background-color: #000000;
    width: ${WindowWidth}px;
    height: 3.5%;
    align-self: flex-end;
`;

const Title = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #fff;
`;

const ShortButton = props => {
    return (
        <ButtonContainer activeOpacity={0.8} onPress={props.onPress}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default ShortButton;
