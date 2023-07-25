import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';
import palette from '../../assets/theme/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    box: {
       width: horizontalScale(315),
       height: verticalScale(650),
       borderRadius: verticalScale(10),
       marginVertical: verticalScale(50),
       borderWidth: verticalScale(4),
       borderColor: palette.light_blue,
       backgroundColor: palette.primary_gray,
       paddingVertical: verticalScale(120),
    },
    button: {
        bottom: verticalScale(100),
    },
    gotItBtn: {
        width: horizontalScale(97),
        height: verticalScale(102),
    }
});

export default styles;