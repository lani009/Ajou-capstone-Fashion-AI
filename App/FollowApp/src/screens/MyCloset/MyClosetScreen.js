import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

function MyClosetScreen({navigation}) {
    return (
        <View>
            <View style={{width: 400, height: 150, backgroundColor: 'black'}} />

            <Image
                source={require('./Image/12.png')}
                style={styles.container}
            />

            <Text
                style={{
                    marginTop: 60,
                    marginLeft: 170,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                }}>
                주돌이
            </Text>

            <Text
                style={{
                    marginTop: 10,
                    marginLeft: 100,
                    fontWeight: 'normal',
                    fontSize: 15,
                    color: 'black',
                }}>
                jkworldchampion@gamil.com
            </Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.BoxSutton}
                    onPress={() => navigation.navigate('MyClothes')}>
                    <Text
                        style={{
                            fontSize: 16.5,
                            textAlign: 'center',
                            color: 'white',
                        }}>
                        MyCloth
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BoxSutton}
                    onPress={() => navigation.navigate('MyLook')}>
                    <Text
                        style={{
                            fontSize: 16.5,
                            textAlign: 'center',
                            color: 'white',
                        }}>
                        MyLook
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={styles.BoxSutton}
                    onPress={() => navigation.navigate('MyAvatar')}>
                    <Text
                        style={{
                            fontSize: 16.5,
                            textAlign: 'center',
                            color: 'white',
                        }}>
                        MyAvatar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BoxSutton}
                onPress={() => navigation.navigate('TryOn')}>
                    <Text
                        style={{
                            fontSize: 16.5,
                            textAlign: 'center',
                            color: 'white',
                        }}>
                        TryOn
                    </Text>
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
    BoxSutton: {
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        padding: 40,
        marginTop: 40,
        borderRadius: 13,
        marginLeft: 30,
        width: 150,
        height: 150,
    },
});

export default MyClosetScreen;
