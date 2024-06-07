import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    button: {
        width: horizontalScale(136),
        height: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(40),
        backgroundColor: palette.light_blue,
        marginTop:verticalScale(20)
    },
    activeButton: {
        opacity: 0.5,
        backgroundColor: palette.primary_gray,
    },
    saveBtn: {
        textAlign: 'center',
        fontSize: moderateScale(17),
        lineHeight: verticalScale(17.9),
        color: palette.white,
    },
    backgroundURL: {
        width: horizontalScale(370),
        height: verticalScale(200),
        marginLeft: 0,
        marginRight: 0,
        marginVertical: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraButton: {
        width: horizontalScale(70),
        height: verticalScale(70),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(40),
        backgroundColor: palette.primary_blue,
        marginTop: verticalScale(30),
    },
    cameraBtn: {
        width: horizontalScale(48),
        height: verticalScale(48),
        resizeMode: 'contain'
    }
});

export default styles;