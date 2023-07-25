import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    button: {
        width: horizontalScale(136),
        height: verticalScale(50),
        backgroundColor: palette.light_blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(40),
        marginHorizontal: horizontalScale(120),
        marginVertical: verticalScale(105)
    },
    saveBtn: {
        textAlign: 'center',
        fontSize: moderateScale(17),
        lineHeight: verticalScale(17.9),
        color: palette.white
    },
    bg: {
        height: verticalScale(200),
        marginLeft: 0,
        marginRight: 0,
    }
});

export default styles;