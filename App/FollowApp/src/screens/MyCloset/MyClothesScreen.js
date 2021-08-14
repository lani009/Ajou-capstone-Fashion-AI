import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

const ClothesContainer = styled.View``;
const ScrollView = styled.ScrollView``;

const MyClothesScreen = () => {
    return (
        <Container>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginBottom: 20,
                    height: 36,
                    position: 'relative',
                }}>
                <View
                    style={{
                        position: 'absolute',
                        width: '50%',
                        height: ' 100%',
                        top: 0,
                        left: 0,
                        backgroundColor: 'black',
                    }}
                />
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRightWidth: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }}>
                    <Text style={{color: 'white'}}>Type</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRightWidth: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }}>
                    <Text>Color</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <ClothesContainer></ClothesContainer>
            </ScrollView>
        </Container>
    );
};

export default MyClothesScreen;
