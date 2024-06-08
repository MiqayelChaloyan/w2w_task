import PropTypes from 'prop-types';
import { memo } from 'react';

import { Image, StatusBar, Text, View } from 'react-native';

import InstructionsCamera from '../../components/instructionsCamera';

import { GeneralTexts, ImagePaths, PageName } from '../../constans';

import styles from './style';


function DevicePosition({ navigation }) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <InstructionsCamera navigation={navigation} screen={PageName.instructions}>
                <View style={styles.container}>
                    <Image style={styles.devicePosition} source={ImagePaths.devicePosition} />
                </View>
                <View style={styles.linearPoints}>
                </View>
                <View style={styles.textContain}>
                    <Text style={styles.title}>
                        {GeneralTexts.devicePositionTitle}
                    </Text>
                    <Text style={styles.text}>
                        {GeneralTexts.devicePosition}
                    </Text>
                </View>
            </InstructionsCamera>
        </>
    );
}

DevicePosition.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default memo(DevicePosition);
