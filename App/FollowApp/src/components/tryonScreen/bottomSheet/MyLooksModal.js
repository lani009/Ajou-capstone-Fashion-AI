import React, {useEffect, useRef} from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    PanResponder,
} from 'react-native';
import {MyLookProvider} from '../../../context/MyLookContext';
import ImgLoader from '../contextLoader/MyLookContextLoader';
const BottomSheet = props => {
    const {modalVisible, setModalVisible} = props;
    const screenHeight = Dimensions.get('screen').height;
    const panY = useRef(new Animated.Value(screenHeight)).current;
    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });

    const resetBottomSheet = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });

    const closeBottomSheet = Animated.timing(panY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
    });

    const panResponders = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => false,
            onPanResponderMove: (event, gestureState) => {
                panY.setValue(gestureState.dy);
            },
            onPanResponderRelease: (event, gestureState) => {
                if (gestureState.dy > 0 && gestureState.vy > 1.5) {
                    closeModal();
                } else {
                    resetBottomSheet.start();
                }
            },
        }),
    ).current;

    useEffect(() => {
        if (props.modalVisible) {
            resetBottomSheet.start();
        }
    }, [props.modalVisible, resetBottomSheet]);

    const closeModal = () => {
        closeBottomSheet.start(() => {
            setModalVisible(false);
        });
    };

    return (
        <MyLookProvider>
            <Modal
                visible={modalVisible}
                animationType={'fade'}
                transparent
                statusBarTranslucent>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback onPress={closeModal}>
                        <View style={styles.background} />
                    </TouchableWithoutFeedback>
                    <Animated.View
                        style={{
                            ...styles.bottomSheetContainer,
                            transform: [{translateY: translateY}],
                        }}
                        {...panResponders.panHandlers}>
                        <ImgLoader />
                    </Animated.View>
                </View>
            </Modal>
        </MyLookProvider>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    background: {
        flex: 1,
    },
    bottomSheetContainer: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});

// const ClothesList = [
//     {
//         id: '1',
//         src: require('../../../asset/test/TryOn/Clothes/1.png'),
//     },
//     {
//         id: '2',
//         src: require('../../../asset/test/TryOn/Clothes/2.png'),
//     },
//     {
//         id: '3',
//         src: require('../../../asset/test/TryOn/Clothes/3.png'),
//     },
//     {
//         id: '4',
//         src: require('../../../asset/test/TryOn/Clothes/4.png'),
//     },
//     {
//         id: '5',
//         src: require('../../../asset/test/TryOn/Clothes/5.png'),
//     },
//     {
//         id: '6',
//         src: require('../../../asset/test/TryOn/Clothes/6.png'),
//     },
//     {
//         id: '7',
//         src: require('../../../asset/test/TryOn/Clothes/7.png'),
//     },
//     {
//         id: '8',
//         src: require('../../../asset/test/TryOn/Clothes/8.png'),
//     },
//     {
//         id: '9',
//         src: require('../../../asset/test/TryOn/Clothes/9.png'),
//     },
//     {
//         id: '10',
//         src: require('../../../asset/test/TryOn/Clothes/10.png'),
//     },
// ];

export default BottomSheet;
