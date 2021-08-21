import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const GridImage = props => {
    const modifyState = () => {
        props.setRecentPicture(props.id);
        props.setModalVisible(true);
    };

    return (
        <TouchableOpacity
            onPress={() => modifyState()}
            style={styles.thumbnailContainer}>
            <Image source={props.source} style={styles.imageThumbnail} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    thumbnailContainer: {
        flex: 1,
    },
    imageThumbnail: {
        height: '100%',
        width: '100%',
        flex: 1,
    },
});

export default GridImage;
