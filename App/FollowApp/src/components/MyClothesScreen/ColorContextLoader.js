import React, {useContext} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    FlatList,
    ScrollView,
} from 'react-native';
import {MyClosetContext} from '../../context/MyClosetContext';

const ImgLoader = props => {
    const clothesList = useContext(MyClosetContext);
    const blackDataList = clothesList.myClothList.filter(
        item => item.color === 'black',
    );
    const grayDataList = clothesList.myClothList.filter(
        item => item.color === 'gray',
    );
    const blueDataList = clothesList.myClothList.filter(
        item => item.color === 'blue',
    );
    return (
        <View
            style={{
                alignContent: 'center',
                marginBottom: '20%',
                height: '40%',
            }}
            nestedScrollEnabled={true}>
            <View
                style={{
                    marginBottom: '5%',

                    borderBottomWidth: 1,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: '2%',
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
                        BLACK
                    </Text>
                </View>
                <FlatList
                    data={blackDataList}
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
                    nestedScrollEnabled={true}
                />
            </View>
            <View
                style={{
                    marginBottom: '5%',
                    borderBottomWidth: 1,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: '2%',
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
                        GRAY
                    </Text>
                </View>
                <FlatList
                    data={grayDataList}
                    renderItem={renderItem}
                    keyExtractor={item => String(item.id)}
                    numColumns={3}
                    horizontal={false}
                    scrollEnabled={false}
                    nestedScrollEnabled={true}
                />
            </View>
            <View
                style={{
                    marginBottom: '5%',

                    borderBottomWidth: 1,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: '2%',
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
                        BLUE
                    </Text>
                </View>
                <FlatList
                    data={blueDataList}
                    renderItem={renderItem}
                    keyExtractor={item => String(item.id)}
                    numColumns={3}
                    horizontal={false}
                    scrollEnabled={false}
                    nestedScrollEnabled={true}
                />
            </View>
        </View>
    );
};

const renderItem = ({item}) => (
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
);

export default ImgLoader;
