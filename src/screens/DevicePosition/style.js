import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: horizontalScale(20),
    },
    textContain: {
        marginTop: verticalScale(50),
    },
    linearPoints: {
        position: 'absolute',
        top: verticalScale(130),
        right: horizontalScale(10)
    },
    vectorUpwards: {
        width: horizontalScale(80),
        height: verticalScale(24),
        position: 'relative',
        right: horizontalScale(70)
    },
    vectorDownwards: {
        width: horizontalScale(84),
        height: verticalScale(89),
        position: 'relative',
        right: horizontalScale(70)
    },
    sideLook: {
        width: horizontalScale(50),
        height: verticalScale(134),
    },
    table: {
        width: horizontalScale(158),
        height: verticalScale(132),
    },
    title: {
        fontSize: moderateScale(20),
        textAlign: 'center',
        color: palette.black,
    },
    text: {
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginHorizontal: horizontalScale(20),
        color: palette.black,
    }
});

export default styles;