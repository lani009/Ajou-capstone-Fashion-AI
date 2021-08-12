import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const gridImage = (props) => {
    return(
        <TouchableOpacity onPress={() => props.setRecentPicture(props.id)}>
            <Image source={require(props.path)} />
        </TouchableOpacity>
    );
}

const gridView = styled.View`
    width: 100%;
    height: auto;
`;

export default gridImage;