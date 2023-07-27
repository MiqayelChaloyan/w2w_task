import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: palette.gray,
    },
    box: {
        width: horizontalScale(315),
        height: verticalScale(650),
        borderRadius: verticalScale(10),
        marginVertical: verticalScale(80),
        borderWidth: verticalScale(4),
        paddingVertical: verticalScale(120),
        borderColor: palette.light_blue,
        backgroundColor: palette.primary_gray,
    },
    button: {
        bottom: verticalScale(130),
        zIndex: 1
    },
    gotItBtn: {
        width: horizontalScale(97),
        height: verticalScale(102),
    },
    line: {
        backgroundColor: palette.primary_gray,
        width: horizontalScale(150),
        height: verticalScale(110),
        position: 'absolute',
        bottom: verticalScale(182),
        right: horizontalScale(-28),
    },
});

export default styles;