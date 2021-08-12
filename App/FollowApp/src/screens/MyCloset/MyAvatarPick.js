import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image
} from 'react-native';

const amountPicture = 2;

const App = () => {
    const [dataSource, setDataSource] = useState([]);
    const [recentPicture, setRecentPicture] = useState(null);

    useEffect(() => {
        let items = Array.apply(null, Array(amountPicture)).map((v, i) => {
            return {
                /*
                src: 'http://placehold.it/200x200?text=' + (i + 1)
                */
                id: i,
                props: {
                    source: './img/avatar/avatar' + i + '.png'
                }
            };
        });
        setDataSource(items);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 1
                        }}>
                        <Image
                            style={styles.imageThumbnail}
                            source={{ uri: item.props.source }}
                        />
                    </View>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    );
};
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});


/*
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
// import { useState } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import Buttons from '../../components/buttons/Button';


const MyAvatarScreenPick = ({ navigation, props }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    return (
        <View style={styles.container}>
            <Modal visible={modalVisible} transparent={true}>
                <ImageViewer imageUrls={images} />
            </Modal>
            <GridContainer>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image source={require('./img/avatar/avatar1.png')} />
                </TouchableOpacity>
            </GridContainer>
            <Buttons.LongButton
                title="선택 완료"
                onPress={() => setModalVisible(true)}
            />
        </View>
    );
}

{
    url: '',
    props: {
        source: require('./img/avatar/avatar1.png')
    }
}];

const GridContainer = styled.View`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    avatar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    button: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default MyAvatarScreenPick;

*/