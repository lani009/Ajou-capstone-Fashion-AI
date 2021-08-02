import View from "react-native-gesture-handler/lib/typescript/GestureHandlerRootView";
import PropTypes from 'prop-types';

const ResultBox = (clothObj) => {
    return (
        <View>
            <Text>${clothObj.getName()}</Text>
            <Text>${clothObj.getMaker()}</Text>
            <Image source={clothObj.getImgPath()} />
        </View>
    );
}


ResultBox.propTypes = {
    clothObj: PropTypes.object.isRequired,
}
