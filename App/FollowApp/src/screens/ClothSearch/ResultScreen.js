import React from 'react';
import {Text, Image, Linking} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../../components/HomeScreen/CardViewComponents';

const Container = styled.SafeAreaView`
    flex: 1;
`;
const ScrollView = styled.ScrollView``;

const List = styled.TouchableOpacity`
    margin: 10px;
    padding: 10px;
    flex-direction: row;
    flex: 1;
`;
const TextView = styled.View`
    padding: 5px;
    justify-content: center;
    background-color: #f2f2f2;
    flex: 1;
`;
const ImageContainer = styled.View``;

const ResultScreen = () => {
    return (
        <Container>
            <Header title="Results" />
            <ScrollView>
                <List
                    onPress={() =>
                        Linking.openURL(
                            'https://lookple.com/product/detail.html?product_no=4095&cafe_mkt=google_dy&gclid=CjwKCAjwyIKJBhBPEiwAu7zll2E292-a_nNF3Wjn-053e98ZwDrRmrp_68LuejpvtZS7UzyqR8-3dhoC3BoQAvD_BwE',
                        )
                    }>
                    <Image
                        source={require('../../../asset/img/FindImage/Clothes/1.jpg')}
                        style={{
                            width: 130,
                            height: 130,
                        }}
                    />

                    <TextView>
                        <Text
                            style={{
                                fontSize: 19,
                                marginBottom: 10,
                                color: 'black',
                            }}>
                            {'룩 헤미트 777 럭키 데님팬츠'}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                marginBottom: 5,
                                color: 'black',
                            }}>
                            {'₩ 39,000'}
                        </Text>
                        <Text
                            style={{
                                fontSize: 17,
                                marginBottom: 5,
                                color: 'black',
                            }}>
                            {'룩플'}
                        </Text>
                    </TextView>
                </List>
                <List
                    onPress={() =>
                        Linking.openURL(
                            'https://www.29cm.co.kr/product/607399?utm_source=google&utm_medium=display&utm_campaign=conversion_googleshopping&utm_content=607399&BSCPN=CMCOM&BSPRG=GASA&BSCCN1=googleshopping_607399&gclid=CjwKCAjwyIKJBhBPEiwAu7zllxInMnKZOxByJeVm_Pnh2SHjKeHcupcMh-HxxnbqZucU4D00UHoirRoCr4kQAvD_BwE',
                        )
                    }>
                    <Image
                        source={require('../../../asset/img/FindImage/Clothes/2.jpg')}
                        style={{
                            width: 130,
                            height: 130,
                        }}
                    />
                    <TextView>
                        <Text
                            style={{
                                fontSize: 19,
                                marginBottom: 10,
                                color: 'black',
                            }}>
                            {'플레인 아이스 라이트 블루 워싱 와이드'}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                marginBottom: 5,
                                color: 'black',
                            }}>
                            {'₩ 61,600'}
                        </Text>
                        <Text
                            style={{
                                fontSize: 17,
                                marginBottom: 5,
                                color: 'black',
                            }}>
                            {'인로우스'}
                        </Text>
                    </TextView>
                </List>
                <List
                    onPress={() =>
                        Linking.openURL(
                            'https://lookple.com/product/detail.html?product_no=2017&cafe_mkt=google_dy&gclid=CjwKCAjwyIKJBhBPEiwAu7zll_V069A5WEVqG0EnjTujsC_FzbWiiLszGMMpyqfbM5FGnO5Brwb_6xoC6LUQAvD_BwE',
                        )
                    }>
                    <Image
                        source={require('../../../asset/img/FindImage/Clothes/3.jpg')}
                        style={{
                            width: 130,
                            height: 130,
                        }}
                    />
                    <TextView>
                        <Text
                            style={{
                                fontSize: 19,
                                marginBottom: 10,
                                color: 'black',
                            }}>
                            {'룩 우스피 세미와이드데님'}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                marginBottom: 5,
                                color: 'black',
                            }}>
                            {'₩ 33,000'}
                        </Text>
                        <Text
                            style={{
                                fontSize: 17,
                                marginBottom: 5,
                                color: 'black',
                            }}>
                            {'룩플'}
                        </Text>
                    </TextView>
                </List>
            </ScrollView>
        </Container>
    );
};

export default ResultScreen;
