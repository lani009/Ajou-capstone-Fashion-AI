import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {AvatarConsumer} from '../../context/avatar/AvatarSelectedContext';
const GridImage = props => {
    const modifyState = () => {
        props.setRecentPicture(props.id);
        props.setModalVisible(true);
    };

    return (
        <AvatarConsumer>
            {({state, actions}) => (
                <TouchableOpacity
                    onPress={() => {
                        modifyState();
                        actions.setAvatar(props.source);
                        console.log(props.source);
                        console.log(state.avatar);
                    }}
                    style={styles.thumbnailContainer}>
                    <Image
                        source={props.source}
                        style={styles.imageThumbnail}
                        resizeMode="stretch"
                    />
                </TouchableOpacity>
            )}
        </AvatarConsumer>
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
