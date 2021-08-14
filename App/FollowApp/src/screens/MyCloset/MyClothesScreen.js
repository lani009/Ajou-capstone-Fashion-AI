import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

const ClothesContainer = styled.View``;
const ScrollView = styled.ScrollView``;

const MyClothesScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSingleIndexSelect = index => {
        // For single Tab Selection SegmentedControlTab
        setSelectedIndex(index);
    };
    return (
        <Container>
            <View style={{width: '70%', margin: '5%'}}>
                <SegmentedControlTab
                    values={['Type', 'Color']}
                    selectedIndex={selectedIndex}
                    tabStyle={{borderColor: 'black'}}
                    activeTabStyle={{backgroundColor: 'black'}}
                    onTabPress={handleSingleIndexSelect}
                    tabTextStyle={{color: 'black'}}
                />
            </View>
            <ScrollView>
                <ClothesContainer></ClothesContainer>
            </ScrollView>
        </Container>
    );
};
export default MyClothesScreen;
