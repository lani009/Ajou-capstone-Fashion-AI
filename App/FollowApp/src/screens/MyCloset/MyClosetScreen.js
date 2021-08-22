import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

function MyClosetScreen({navigation}) {
    return (
        <View>
            <View style={styles.upbox} />

            <Image
                source={require('./Image/12.png')}
                style={styles.container}
            />

            <Text
                style={{
                    marginTop: 60,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                }}>
                주돌이
            </Text>

            <Text
                style={{
                    marginTop: 10,
                    textAlign: 'center',
                    fontWeight: 'normal',
                    fontSize: 15,
                    color: 'black',
                }}>
                jkworldchampion@gamil.com
            </Text>
            <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity
                    style={styles.BoxButton}
                    onPress={() => navigation.navigate('MyClothes')}>
                    <Text style={styles.Boxtext}>MyCloth</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.BoxButton}
                    onPress={() => navigation.navigate('MyLook')}>
                    <Text style={styles.Boxtext}>MyLook</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity
                    style={styles.BoxButton}
                    onPress={() => navigation.navigate('MyAvatar')}>
                    <Text style={styles.Boxtext}>MyAvatar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.BoxButton}
                    onPress={() => navigation.navigate('TryOn')}>
                    <Text style={styles.Boxtext}>TryOn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 110,
        position: 'absolute',
        marginTop: 100,
        marginLeft: 140,
    },
    BoxButton: {
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        padding: 0,
        marginTop: 40,
        borderRadius: 13,
        width: 170,
        height: 150,
    },
    upbox: {
        width: '100%',
        height: '10%',
        backgroundColor: 'black',
    },
    Boxtext: {
        fontSize: 16.5,
        textAlign: 'center',
        marginTop: 60,
        color: 'white',
    },
});

export default MyClosetScreen;
