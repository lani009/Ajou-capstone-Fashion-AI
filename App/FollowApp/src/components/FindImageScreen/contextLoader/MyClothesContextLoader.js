import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {MyClosetContext} from '../../../context/MyClosetContext';
import {FindImageConsumer} from '../../../context/FindImageContext';

const ImgLoader = props => {
    const clothesList = useContext(MyClosetContext);
    // const init = item => {
    //     setClothData(item);
    //     console.log(clothData);
    // };
    return (
        <View>
            <FlatList
                data={clothesList.myClothList}
                renderItem={({item}) => (
                    <View>
                        <FindImageConsumer>
                            {({actions}) => (
                                <TouchableOpacity
                                    onPress={() => actions.setClothes(item)}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        margin: 15,
                                    }}>
                                    <Image
                                        source={item.imgPath}
                                        style={{
                                            width: 90,
                                            height: 90,
                                            borderRadius: 20,
                                        }}
                                    />
                                </TouchableOpacity>
                            )}
                        </FindImageConsumer>
                    </View>
                )}
                keyExtractor={item => String(item.id)}
                numColumns={3}
                horizontal={false}
            />
        </View>
    );
};

export default ImgLoader;
