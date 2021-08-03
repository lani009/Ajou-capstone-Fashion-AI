import React, {useState, forwardRef} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import DropShadow from 'react-native-drop-shadow';

const Container = styled.View`
    width: 90%;
    margin: 10px 0;
`;
const Label = styled.Text`
    color: ${({theme, isFocused}) =>
        isFocused ? theme.text : theme.Input.label};
`;
const StyledTextInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.Input.placeholder,
}))`
    background-color: ${({theme, editable}) =>
        editable ? theme.background : theme.Input.disabledBackground};
    color: ${({theme}) => theme.text};
    padding: 20px 10px;
    font-size: 16px;
    border: 1px solid
        ${({theme, isFocused}) => (isFocused ? theme.text : theme.Input.border)};
    border-radius: 4px;
`;

const InputArea = forwardRef(
    (
        {label, onChangeText, placeholder, isPassword, returnKeyType, disabled},
        ref,
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const shadowStyle = {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: isFocused ? 0.3 : 0,
            shadowRadius: 3,
        };

        return (
            <Container>
                <Label isFocused={isFocused}>{label}</Label>
                <DropShadow style={shadowStyle}>
                    <StyledTextInput
                        ref={ref}
                        isFocused={isFocused}
                        onFocus={() => {
                            setIsFocused(true);
                        }}
                        onChangeText={onChangeText}
                        onBlur={() => {
                            setIsFocused(false);
                        }}
                        secureTextEntry={isPassword}
                        placeholder={placeholder}
                        editable={!disabled}
                        returnKeyType={returnKeyType}
                        autoCapitalize="none"
                        textContentType="none"
                        underlineColorAndroid="transparent"
                        autoCorrect={false}
                    />
                </DropShadow>
            </Container>
        );
    },
);

InputArea.propTypes = {
    label: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'next']),
    disabled: PropTypes.bool,
};

export default InputArea;
