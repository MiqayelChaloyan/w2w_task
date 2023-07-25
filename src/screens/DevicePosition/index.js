import PropTypes from 'prop-types';
import { memo } from 'react';
import { Image, Text, View } from 'react-native';
import InstructionsCamera from '../../components/instructionsCamera';
import { sideLookURL, tableURL, vectorUpwardsURL, vectorDownwardsURL } from '../../constans/imagePath';
import styles from './style';

function DevicePositionScreen({ navigation }) {
    return (
        <InstructionsCamera navigation={navigation} screen='Instructions'>
            <View style={styles.container}>
                <Image style={styles.table} source={tableURL} />
                <Image style={styles.sideLook} source={sideLookURL} />
            </View>
            <View style={styles.linearPoints}>
                <Image style={styles.vectorUpwards} source={vectorUpwardsURL} />
                <Image style={styles.vectorDownwards} source={vectorDownwardsURL} />
            </View>
            <View style={styles.textContain}>
                <Text style={styles.title}>Device Position</Text>
                <Text style={styles.text}>
                    Place your device at hip height on a table or similar surface.
                </Text>
            </View>
        </InstructionsCamera>
    );
}

DevicePositionScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default memo(DevicePositionScreen);
