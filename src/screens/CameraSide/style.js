import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    button: (isCorrectDevicePosition) => ({
        width: horizontalScale(136),
        height: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(40),
        marginHorizontal: horizontalScale(120),
        position: 'absolute',
        bottom: verticalScale(95),
        zIndex: 1,
        opacity:  isCorrectDevicePosition ? 1 : 0.5
    }),
    capture: {
        width: horizontalScale(92),
        height: verticalScale(97),
    },
    cuntdownTimer: {
        width: horizontalScale(370),
        position: 'absolute',
        bottom: verticalScale(400),
        textAlign: 'center',
        fontSize: moderateScale(100),
        color: palette.white,
        opacity: 0.5,
        backgroundColor: 'transparent'
    },
    drawingOrder: {
        position: 'absolute',
        flexDirection: 'row',
        top: verticalScale(290),
        marginHorizontal: horizontalScale(85)
    },
    frontURL: {
        width: horizontalScale(120),
        height: verticalScale(170)
    },
    arrowUrl: {
        width: horizontalScale(20),
        height: verticalScale(20),
        top: verticalScale(80)
    },
    profileURL: {
        width: horizontalScale(70),
        height: verticalScale(170)
    }
});

export default styles;