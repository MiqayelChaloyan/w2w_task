import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
// import { colors } from '@constants/colors';
// import { horizontalScale } from '@assets/metrics';

import styles from './style';
import { horizontalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';

const defaultProps = {
  btnBgColor: colors.cyan,
  borderWidth: 0,
  borderRadius: RFValue(30),
  width: horizontalScale(245),
  height: RFValue(50),
  disabled: false,
  textColor: colors.white,
  borderColor: colors.cyan,
};

const buttonVariants = {
  Save: styles.elevation,
  Resend: styles.elevation,
};

const Button = ({
  onPress,
  title,
  btnBgColor,
  borderWidth,
  borderRadius,
  borderColor,
  width,
  height,
  disabled,
  textColor
}) => {

  return (
    <TouchableOpacity
      style={[
        styles.button(btnBgColor), styles.elevation,
        buttonVariants[title] || {},
        disabled && { backgroundColor: colors.lightGray },
        { borderWidth, borderRadius, borderColor: disabled ? colors.lightGray : borderColor, width, height }
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.buttonText(textColor)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  disabled: PropTypes?.bool,
  textColor: PropTypes.string
};

export default Button;
Button.defaultProps = defaultProps;
