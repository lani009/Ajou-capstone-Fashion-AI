import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {MyClosetContext} from '../../../context/MyClosetContext';
import {MySelectionConsumer} from '../../../context/MySelectionContext';

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
                                    style={{flex: 1, alignItems:'center', margin:15}}>
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
