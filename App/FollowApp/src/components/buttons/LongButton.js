import React from 'react'
import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

const WindowHeight =Dimensions.get('window').width - 100
const ButtonContainer = styled.TouchableOpacity`

  border-radius: 20px;
  align-items: center;
  padding: 10px 50px;
  margin: 10px 0px;
  justify-content: center;
  background-color: #000000; 
  width: ${WindowHeight}px;

`;

const Title = styled.Text`
    color: #fff;
    font-size: 17px;
    font-weight: 600;
`;


const LongButton = (props) => {
    return(
        <ButtonContainer activeOpacity={0.8} onPress={props.onPress}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    )
}

export default LongButton;