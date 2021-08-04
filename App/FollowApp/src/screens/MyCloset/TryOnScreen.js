import React from 'react';
import styled from 'styled-components/native';
import Button from '../../components/buttons/Button';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const AvatarView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 1px;
`;

const TryOnScreen = () => {
    return (
        <Container>
            <Button.LongButton title="My Clothes" />
            <Button.LongButton title="My Looks" />
        </Container>
    );
};

export default TryOnScreen;
