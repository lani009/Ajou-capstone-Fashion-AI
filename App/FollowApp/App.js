/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme';
import Navigation from './src/navigations/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {UserContextProvider} from './src/context/UserContext';
import {AvatarContextProvider} from './src/context/AvatarContext';

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <StatusBar />
                <UserContextProvider >
                    <Navigation/>
                </UserContextProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

export default App;
