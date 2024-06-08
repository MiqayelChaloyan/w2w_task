import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';
import { Styles } from '../../constans';
// import { verticalScale, horizontalScale } from '@assets/metrics';
// import { colors } from '@constants/colors';
// import { Styles } from '@constants';

export const styles = StyleSheet.create({
  container: {
    borderWidth: horizontalScale(1),
    width: horizontalScale(47),
    borderRadius: verticalScale(75),
    height: verticalScale(47),
    borderColor: colors.cyan,
    justifyContent: Styles.center,
    alignItems: Styles.center,
  },
  button: (isActive) => ({
    backgroundColor: isActive ? colors.cyan : 'transparent',
    width: horizontalScale(33),
    borderRadius: verticalScale(74),
    height: verticalScale(33),
    borderWidth: isActive ? 0 : verticalScale(1.5),
    borderColor: colors.cyan,
    justifyContent: Styles.center,
  }),
  buttonText: (isActive) => ({
    color: isActive ? colors.white : colors.cyan,
    fontSize: RFValue(14),
    textAlign: Styles.center,
    bottom: verticalScale(1),
  }),
});
