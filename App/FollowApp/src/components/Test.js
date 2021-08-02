import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;

const Test = () => {
    return (
        <View>
            <Title>Hi</Title>
            <Title>Hi</Title>
        </View>
    );
};

export default Test;
