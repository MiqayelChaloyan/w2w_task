import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    button: {
        width: horizontalScale(136),
        height: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(40),
        marginHorizontal: horizontalScale(120),
        position: 'absolute',
        bottom: verticalScale(95),
        zIndex: 1
    },
    capture: {
        width: horizontalScale(92),
        height: verticalScale(97),
    },
    cuntdownTimer: {
        width: horizontalScale(370),
        position: 'absolute',
        bottom: verticalScale(400),
        textAlign: 'center',
        fontSize: 100,
        opacity: 0.5,
        backgroundColor: 'transparent',
        color: palette.white,
    }
});

export default styles;