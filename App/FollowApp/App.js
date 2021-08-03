/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme';
import Navigation from './src/navigations/navigation';

const App = () => {
    return (
        <SafeAreaView>
            <ThemeProvider theme={theme}>
                <StatusBar />
                <Navigation />
            </ThemeProvider>
        </SafeAreaView>
    );
};

export default App;
