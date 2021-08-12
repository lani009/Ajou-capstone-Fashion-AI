import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

// props.setState(props.source)}>
const GridImage = (props) => {
    const modifyState = () => {
        console.log(props);
        props.setRecentPicture(props.source);
        props.setModalVisible(true);
    };

    return (
        <TouchableOpacity onPress={() => modifyState()}>
            <View style={styles.imageThumbnail}>
                <Image source={{ uri: props.source }} />
            </View>
            <Text>why can't see</Text>
        </TouchableOpacity>
    );
}
/*
const GridView = styled.View`
    width: 100%;
    height: auto;
`;

const ImageThumbnail = styled.View`
    justify-content: center;
    align-items: center;
    height: 100;
`;

const Image200px = styled.View`
    max-width: 200px;
    max-height: 200px;
    overflow: hidden;
`;
  
*/

const styles = StyleSheet.create({
    /*
    GridView: {
        width: 100%,
        height: 'auto',
    },
    */

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
/*
    Image200px: {
        maxWidth: 200px,
        maxHeight: 200px,
        overflow: 'hidden',
    },
*/
});


export default GridImage;