import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './style';

const defaultProps = {
    onPress: null,
    label: '',
    measurements: null,
};

const HighlightedButton = ({ onPress, label, measurements }) => {
    const isActive = label ? measurements[label.toLowerCase()] : true;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.button(isActive)}>
                <Text style={styles.buttonText(isActive)}>+</Text>
            </View>
        </TouchableOpacity>
    );
};

HighlightedButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string,
    measurements: PropTypes.any,
};

export default HighlightedButton;
HighlightedButton.defaultProps = defaultProps;
