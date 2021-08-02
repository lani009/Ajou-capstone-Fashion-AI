import {View} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';
import theme from '../theme';

const Test = () => {
    return (
        <ThemeProvider theme="theme">
            <View>
                <TitleText>Hi</TitleText>
            </View>
        </ThemeProvider>
    );
};

const TitleText = styled.text`
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 2px;
    border-color: #3498db;
    font-size: 24px;
`;

export default Test;
