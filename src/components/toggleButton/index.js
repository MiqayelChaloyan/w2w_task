import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import Toggle from "react-native-toggle-element";

import { RFValue } from 'react-native-responsive-fontsize';

import styles from './style';
import { TriangleIcon } from '../../constans';
import { horizontalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';

const ToggleIcon = () => (
    <View style={styles.triangle}>
        <TriangleIcon width={horizontalScale(20)} height={RFValue(20)} fill={colors.darkBlue} />
    </View>
);

const ToggleButton = ({ rightText, leftText, width, handleChange, value1, fontSize }) => {
    const [toggleValue, setToggleValue] = useState(value1);

    const handleSubmit = (value, bool) => {
        setToggleValue(bool);
        handleChange(value);
    };

    return (
        <>
            <Toggle
                value={value1}
                thumbButton={styles.trackButton}
                onPress={() => null}
                leftComponent={toggleValue && <ToggleIcon />}
                rightComponent={!toggleValue && <ToggleIcon />}
                trackBar={styles.trackBar(width)}
            />
            <View style={styles.toggleText}>
                <TouchableOpacity onPress={() => handleSubmit(rightText, true)}>
                    <Text style={styles.text(fontSize)}>{rightText}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSubmit(leftText, false)}>
                    <Text style={styles.text(fontSize)}>{leftText}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
};

ToggleButton.propTypes = {
    rightText: PropTypes.string.isRequired,
    leftText: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    handleChange: PropTypes.func,
};

export default React.memo(ToggleButton);


