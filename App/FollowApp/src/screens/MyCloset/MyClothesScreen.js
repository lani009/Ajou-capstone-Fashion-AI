import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {MyClosetProvider} from '../../context/MyClosetContext';
import AllClothesImageLoader from '../../components/MyClothesScreen/AllClothesContextLoader';
import TypeContextLoader from '../../components/MyClothesScreen/TypeContextLoader';
import ColorContextLoader from '../../components/MyClothesScreen/ColorContextLoader';
import {Header} from '../../components/HomeScreen/CardViewComponents';
const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

const ClothesContainer = styled.View``;

const MyClothesScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSingleIndexSelect = index => {
        // For single Tab Selection SegmentedControlTab
        setSelectedIndex(index);
    };
    return (
        <MyClosetProvider>
            <Container>
            <Header title="My Clothes"/>
                <View style={{width: '80%', margin: '5%'}}>
                    <SegmentedControlTab
                        values={['All', 'Type', 'Color']}
                        selectedIndex={selectedIndex}
                        tabStyle={{borderColor: 'black'}}
                        activeTabStyle={{backgroundColor: 'black'}}
                        onTabPress={handleSingleIndexSelect}
                        tabTextStyle={{color: 'black'}}
                    />
                </View>
                <ClothesContainer>
                    {selectedIndex === 0 && <AllClothesImageLoader />}
                    {selectedIndex === 1 && <TypeContextLoader />}
                    {selectedIndex === 2 && <ColorContextLoader />}
                </ClothesContainer>
            </Container>
        </MyClosetProvider>
    );
};
export default MyClothesScreen;
