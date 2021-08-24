import React from 'react';
import { TouchableOpacity } from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardView = ({data}) => (
    <View style={styles.CardContainer}>
        <TouchableOpacity>
        <Image
            source={data.imgPath}
            style={{margin:10 , width:300, height:300}}
            resizeMode='center'
        />
        <Text style={styles.CardTitle}>{data.name}</Text>
        <Text style={styles.CardContent}>{data.type}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor:'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d6d7da',
        margin: 20,
        alignItems:'center',
        },
    CardTitle: {
        alignSelf:'center',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5,
    },
    CardContent: {
        alignSelf:'center',
        fontSize: 15,
        padding: 5,
        
    },
});

export default CardView;
