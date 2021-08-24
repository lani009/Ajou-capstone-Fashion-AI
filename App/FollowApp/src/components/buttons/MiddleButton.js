import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const WindowWidth = Dimensions.get('window').width / 3;

const ButtonContainer = styled.TouchableOpacity`
    border-radius: 10px;
    align-items: center;
    padding: 10px 10px;
    margin: 10px 10px;
    justify-content: center;
    background-color:#000000;
    width: ${WindowWidth}px;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: 600;
`;

const MiddleButton = props => {
    return (
        <ButtonContainer activeOpacity={0.8} onPress={props.onPress}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default MiddleButton;
