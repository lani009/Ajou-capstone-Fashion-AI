import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native';
import {MyClosetContext} from '../../context/MyClosetContext';

const ImgLoader = props => {
    const clothesList = useContext(MyClosetContext);
    const topDataList = clothesList.myClothList.filter(
        item => item.type === 'top',
    );
    const bottomDataList = clothesList.myClothList.filter(
        item => item.type === 'bottom',
    );
    // const init = item => {
    //     setClothData(item);
    //     console.log(clothData);
    // };
    return (
        <View style={{alignContent: 'center'}} scrollEnabled={true}>
            <View
                style={{
                    marginBottom: '10%',
                    paddingBottom: '10%',
                    borderBottomWidth: 1,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: '5%',
                        borderWidth: 1,
                        width: 'auto',
                        backgroundColor: 'black',
                        alignSelf: 'center',
                        padding: 5,
                    }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                        TOP
                    </Text>
                </View>
                <FlatList
                    data={topDataList}
                    renderItem={({item}) => (
                        <View>
                            <TouchableOpacity style={{flex: 1, margin: 15}}>
                                <Image
                                    source={item.imgPath}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => String(item.id)}
                    numColumns={3}
                    horizontal={false}
                    scrollEnabled={false}
                />
            </View>
            <View
                style={{
                    marginBottom: '10%',
                    paddingBottom: '10%',
                    borderBottomWidth: 1,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: '5%',
                        borderWidth: 1,
                        width: 'auto',
                        backgroundColor: 'black',
                        alignSelf: 'center',
                        padding: 5,
                    }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                        BOTTOM
                    </Text>
                </View>
                <FlatList
                    data={bottomDataList}
                    renderItem={({item}) => (
                        <View>
                            <TouchableOpacity style={{flex: 1, margin: 15}}>
                                <Image
                                    source={item.imgPath}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => String(item.id)}
                    numColumns={3}
                    horizontal={false}
                    scrollEnabled={false}
                />
            </View>
        </View>
    );
};

export default ImgLoader;
