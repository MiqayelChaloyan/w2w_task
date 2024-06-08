import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import styles from './style';
import Button from '../button';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';
import { ButtonsTexts } from '../../constans';
import CameraButton from '../cameraButton';

// import { requestCameraPermission } from '@utils/cameraPermission';
// import { useNavigation } from '@react-navigation/native';

const MeasurementsFooter = ({ camera, handleSave, param, disabled }) => {

    const props = {
        onPress: () => handleSave(param),
        title: ButtonsTexts.save,
        btnBgColor: colors.cyan,
        width: horizontalScale(136),
        height: verticalScale(50),
        borderRadius: verticalScale(30),
        borderWidth: verticalScale(1),
        borderColor: colors.cyan,
        disabled,
    };


    return (
        <View style={styles.container}>
            <View style={styles.header1}>
                <View style={styles.header2} />
            </View>
            <View style={styles.body1}>
                <LinearGradient
                    style={styles.linearGradientStyle}
                    start={{ x: 1.5, y: 4 }} end={{ x: 0, y: 0 }}
                    colors={['#D8C3F2', '#D4E7F1', '#A9BCE0', '#DAC8F6']}
                >
                    <View style={styles.body2}>
                        <View style={styles.buttons}>
                            {camera ? <CameraButton disabled={disabled} onPress={handleSave} /> : <Button {...props} />}
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

MeasurementsFooter.propTypes = {
    handleSave: PropTypes.func,
    param: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    disabled: PropTypes.bool,
    camera: PropTypes.bool,
};

export default React.memo(MeasurementsFooter);