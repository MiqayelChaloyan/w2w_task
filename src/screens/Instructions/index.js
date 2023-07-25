import PropTypes from 'prop-types';
import React, { memo, useContext, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { GlobalDataContext } from '../../contexts/context';
import InstructionsCamera from '../../components/instructionsCamera';
import { degreeURL, frontLookURL, sideLookURL } from '../../constans/imagePath';
import styles from './style';

function InstructionsScreen({ navigation }) {
    const { data } = useContext(GlobalDataContext);
    console.log(data, ">>>>>>>>>>>>");

    return (
        <InstructionsCamera navigation={navigation} screen='Instructions'>
            <View style={styles.container}>
                <Image style={styles.frontLook} source={frontLookURL} />
                <Image style={styles.sideLook} source={sideLookURL} />
            </View>
            <View style={styles.linearPoints}>
                <Image style={styles.degree} source={degreeURL} />
            </View>
            <View style={styles.textContain}>
                <Text style={styles.text}>
                    Choose the
                    <Text style={styles.boldText}>timer</Text>
                    for your desired duration.
                </Text>
                <Text style={styles.text}>
                    Your
                    <Text style={styles.boldText}>entire body</Text>
                    should be visible in the picture, from head to toe.
                </Text>
                <Text style={styles.text}>
                    Raise your arms
                    <Text style={styles.boldText}>to sides (  ° with body)</Text>
                    and spread your feet shoulder width apart.
                </Text>
                <Text style={styles.text}>
                    When the
                    <Text style={styles.boldText}>countdown</Text>
                    is complete, the image will be captured.
                </Text>
            </View>
        </InstructionsCamera>
    );
}

InstructionsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default memo(InstructionsScreen);
