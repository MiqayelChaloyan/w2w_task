import {StyleSheet} from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: horizontalScale(343),
    height: verticalScale(51),
    borderWidth: verticalScale(1),
    marginBottom: verticalScale(10),
    borderColor: palette.white,
    padding: verticalScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: palette.white,
    paddingVertical: verticalScale(7),
    fontSize: moderateScale(15),
    paddingEnd: horizontalScale(70),
    color: palette.black
  },
});

export default styles;