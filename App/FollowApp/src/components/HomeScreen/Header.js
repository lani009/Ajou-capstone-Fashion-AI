import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => (
    <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    HeaderContainer: {
        
        backgroundColor: '#FAFAFA',
        width: '100%',
        padding: 8,
       
    },
    HeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
});

export default Header;
