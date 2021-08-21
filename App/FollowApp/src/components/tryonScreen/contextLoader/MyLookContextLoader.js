import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {MyLookContext} from '../../../context/MyLookContext';
import {MySelectionConsumer} from '../../../context/MySelectionContext';

const ImgLoader = props => {
    const lookList = useContext(MyLookContext);
    return (
        <View>
            <FlatList
                data={lookList.myLookList}
                renderItem={({item}) => (
                    <View>
                        <MySelectionConsumer>
                            {({actions}) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        actions.setTop(item.top);
                                        actions.setBottom(item.bottom);
                                    }}
                                    style={{flex: 1, margin: 15}}>
                                    <Image
                                        source={item.img}
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
