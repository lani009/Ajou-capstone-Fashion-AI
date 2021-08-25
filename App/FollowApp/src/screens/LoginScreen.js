import React, { useState, useRef, useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';
import PressableButton from '../components/buttons/PressableButton';
import { UserContext } from '../context/UserContext';
import InputArea from './../components/InputArea';
import {Header} from '../components/HomeScreen/CardViewComponents';
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

/**
 * 로그인 버튼 터치 콜백
 */
const onLoginButtonPressed = (userId, password, callback) => {
    callback(true, userId, password);
};

const LoginScreen = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const passwordRef = useRef();
    const userDispatch = useContext(UserContext).dispatch;
    useEffect(() => {
        setDisabled(!(userId && password));
    }, [userId, password]);

    const containerStyle = { flex: 1 };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={containerStyle}
            extraScrollHeight={20}>
                <Header title="Login"/>
            <Container>
                <Text>Hi This is Login Page😃</Text>
                <InputArea
                    label="User Id"
                    onChangeText={text => setUserId(text)}
                    placeholder="User Id"
                    returnKeyType="next"
                />
                <InputArea
                    ref={passwordRef}
                    label="Password"
                    onChangeText={text => setPassword(text)}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />
                <PressableButton
                    title="Login"
                    onPress={() =>
                        onLoginButtonPressed(userId, password, userDispatch)
                    }
                    disabled={disabled}
                />
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default LoginScreen;
