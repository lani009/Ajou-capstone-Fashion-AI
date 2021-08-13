import {BottomTabBar} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {MyClosetContext} from '../../../context/MyClosetContext';
import {
    MySelectionProvider,
    MySelectionContext,
    MySelectionConsumer,
} from '../../../context/MySelectionContext';

const ImgLoader = props => {
    const clothesList = useContext(MyClosetContext);
    const dataList = clothesList.myClothList.filter(
        item => item.type === 'top',
    );
    // const init = item => {
    //     setClothData(item);
    //     console.log(clothData);
    // };
    return (
        <View>
            <FlatList
                data={dataList}
                renderItem={({item}) => (
                    <View>
                        <MySelectionConsumer>
                            {({actions}) => (
                                <TouchableOpacity
                                    onPress={() => actions.setTop(item)}
                                    style={{flex: 1, margin: 15}}>
                                    <Image
                                        source={item.imgPath}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: 20,
                                        }}
                                    />
                                </TouchableOpacity>
                            )}
                        </MySelectionConsumer>
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
