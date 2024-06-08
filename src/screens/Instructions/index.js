import PropTypes from 'prop-types';
import { memo } from 'react';

import { Image, StatusBar, Text, View } from 'react-native';

import InstructionsCamera from '../../components/instructionsCamera';

import { ImagePaths, PageName } from '../../constans';

import styles from './style';


function Instructions({ navigation }) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <InstructionsCamera navigation={navigation} screen={PageName.cameraFront}>
                <View style={styles.container}>
                    <Image style={styles.frontLook} source={ImagePaths.frontLook} />
                    <Image style={styles.sideLook} source={ImagePaths.sideLook} />
                </View>
                <View style={styles.linearPoints}>
                    <Image style={styles.degree} source={ImagePaths.degree} />
                </View>
                <View style={styles.textContain}>
                    <Text style={styles.text}>
                        Choose the
                        <Text style={styles.boldText}> timer </Text>
                        for your desired duration.
                    </Text>
                    <Text style={styles.text}>
                        Your
                        <Text style={styles.boldText}> entire body </Text>
                        should be visible in the picture, from head to toe.
                    </Text>
                    <Text style={styles.text}>
                        Raise your arms
                        <Text style={styles.boldText}> to sides (  ° with body) </Text>
                        and spread your feet shoulder width apart.
                    </Text>
                    <Text style={styles.text}>
                        When the
                        <Text style={styles.boldText}> countdown </Text>
                        is complete, the image will be captured.
                    </Text>
                </View>
            </InstructionsCamera>
        </>
    );
}

Instructions.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default memo(Instructions);
