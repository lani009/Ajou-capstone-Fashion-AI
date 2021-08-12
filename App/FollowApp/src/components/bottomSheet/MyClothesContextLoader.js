import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {MyClosetContext} from '../../context/MyClosetContext';

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
                        <TouchableOpacity
                            onPress={() => {
                                props.setClothData(item);
                            }}
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{flex: 1, margin: 15}}>
                            <Image
                                source={item.imgPath}
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 20,
                                }}
                            />
                        </TouchableOpacity>
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
