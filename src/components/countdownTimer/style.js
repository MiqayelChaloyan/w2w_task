import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: verticalScale(20),
    marginHorizontal: horizontalScale(25),
    flexDirection: 'row',
    marginTop: verticalScale(10)
  },
  option: {
    fontSize: moderateScale(35),
    marginHorizontal: horizontalScale(25),
    color: palette.white,
  },

  cuntdownTimer: {
    width: horizontalScale(370),
    position: 'absolute',
    bottom: verticalScale(400),
    textAlign: 'center',
    fontSize: moderateScale(100),
    color: palette.white,
    opacity: 0.5,
}
});

export default styles;
