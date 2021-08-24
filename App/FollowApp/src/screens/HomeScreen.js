import React from 'react';
import styled from 'styled-components/native';
import {Header, CardView} from '../components/HomeScreen/CardViewComponents';
import {MyClothData} from '../data/HomeScreenData';

const Container = styled.SafeAreaView`
    flex: 1;
`;

const StyledText = styled.Text``;

const ScrollViewContainer = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

const HomeScreen = () => {
    return (
        <Container>
            <Header title="Recommend" />
            <ScrollViewContainer>
                {MyClothData.map((data, id) => (
                    <CardView data={data} key={id} />
                ))}
            </ScrollViewContainer>
        </Container>
    );
};

export default HomeScreen;
