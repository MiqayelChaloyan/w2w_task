import { StyleSheet } from 'react-native';
import { colors } from '../../constans/colors';
import { Styles } from '../../constans';
import { horizontalScale } from '../../assets/metrics/metrics';
// import { horizontalScale } from '@assets/metrics';
// import { colors } from '@constants/colors';
// import { Styles } from '@constants';

const styles = StyleSheet.create({
  button: (btnBgColor) => ({
    backgroundColor: btnBgColor,
    padding: horizontalScale(10),
    alignItems: Styles.center,
    justifyContent: Styles.center,
  }),
  buttonText: (textColor) =>({
    color: textColor || colors.white,
    fontSize: Styles.buttonFontSize,
    fontFamily: Styles.fontFamily,
    fontWeight: Styles.fontWeightMedium,
  }),
  elevation: {
    elevation: 4,
    shadowColor: colors.darkBlue,
  },
});

export default styles;