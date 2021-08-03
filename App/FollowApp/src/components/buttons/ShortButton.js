import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const WindowHeight = Dimensions.get('window').width - 320;
const ButtonContainer = styled.TouchableOpacity`
    border-radius: 20px;
    align-items: center;
    padding: 5px 20px;
    margin: 10px 0px;
    justify-content: center;
    background-color: #000000;
    width: ${WindowHeight}px;
`;

const Title = styled.Text`
    font-size: 13px;
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
