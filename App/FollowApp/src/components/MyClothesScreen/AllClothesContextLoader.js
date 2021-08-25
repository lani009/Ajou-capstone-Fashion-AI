import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {MyClosetContext} from '../../context/MyClosetContext';

const ImgLoader = props => {
    const clothesList = useContext(MyClosetContext);

    return (
        <View style={{marginBottom: '20%'}}>
            <FlatList
                data={clothesList.myClothList}
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
            />
        </View>
    );
};

export default ImgLoader;
