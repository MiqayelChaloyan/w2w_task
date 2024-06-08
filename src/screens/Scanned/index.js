import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';

import { Image, Text, View, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';

import { ImagePaths, PageName } from '../../constans';

import styles from './style';


const Ring = ({ value, label, ringURLStyle, ringContainer, ringSize, ringText }) => (
    <>
        <Image source={ImagePaths.ring} style={ringURLStyle} />
        <View style={ringContainer}>
            <Text style={ringSize}>{value}</Text>
            <Text style={ringText}>{label}</Text>
        </View>
    </>
);

function ScannedScreen({ navigation, route }) {
    const { data } = route.params;
    const { shoulder, waist, hip } = data;
    const state = useSelector(state => state.state);
    const imageSource = useMemo(() => state.isFemale ? ImagePaths.femaleFront : ImagePaths.maleFront, [state.isFemale]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>We scanned Your Parameters</Text>
            <View style={styles.contain}>
                <Image source={imageSource} style={styles.averageFemaleBodyURL} />
                <Ring
                    value={Math.round(shoulder)}
                    label="Shoulders"
                    ringURLStyle={styles.shoulderRingURL}
                    ringContainer={styles.shoulder}
                    ringSize={styles.shoulderSize}
                    ringText={styles.shoulderText}
                />
                <Ring
                    value={Math.round(waist)}
                    label="Waist"
                    ringURLStyle={styles.waistRingURL}
                    ringContainer={styles.waist}
                    ringSize={styles.waistSize}
                    ringText={styles.waistText}
                />
                <Ring
                    value={Math.round(hip)}
                    label="Hips"
                    ringURLStyle={styles.hipRingURL}
                    ringContainer={styles.hip}
                    ringSize={styles.hipSize}
                    ringText={styles.hipText}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textBtn}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(PageName.gender)}>
                <Text style={[styles.textBtn, styles.again]}>Scan Again</Text>
            </TouchableOpacity>
        </View>
    );
}

ScannedScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

export default memo(ScannedScreen);
