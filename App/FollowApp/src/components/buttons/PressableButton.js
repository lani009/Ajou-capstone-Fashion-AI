import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.Button.background};
    align-items: center;
    border-radius: 4px;
    width: 100%;
    padding: 10px;
    opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;
const Text = styled.Text`
    font-size: 15px;
    padding: 10px;
    color: ${({theme}) => theme.Button.title};
`;

const PressableButton = ({containerStyle, title, onPress, disabled}) => {
    return (
        <Container style={containerStyle} onPress={onPress} disabled={disabled}>
            <Text>{title}</Text>
        </Container>
    );
};

PressableButton.propTypes = {
    containerStyle: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default PressableButton;
