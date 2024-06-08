import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { RFValue } from 'react-native-responsive-fontsize';

import styles from './style';
import { BackIcon } from '../../constans';
import { horizontalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';

const defaultProps = {
    label: 'Measurements',
    screen: '',
};

const MeasurementsHeader = ({ label, screen }) => {
    const navigation = useNavigation();
    const title = label.toLocaleUpperCase();

    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle='light-content' />
            <View style={styles.container}>
                <TouchableOpacity onPress={navigation.goBack} style={styles.back}>
                    <BackIcon width={horizontalScale(25)} height={RFValue(25)} fill={colors.white} />
                </TouchableOpacity>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
            </View>
        </>
    )
};

MeasurementsHeader.propTypes = {
    label: PropTypes.string,
    screen: PropTypes.string,
};

MeasurementsHeader.defaultProps = defaultProps;
export default React.memo(MeasurementsHeader);
