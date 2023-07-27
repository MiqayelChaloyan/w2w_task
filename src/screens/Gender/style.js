import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: palette.primary_blue,
    },
    gender: {
        textAlign: 'center',
        fontSize: moderateScale(12),
        textTransform: 'uppercase',
        marginBottom: verticalScale(150),
        top: verticalScale(50),
        color: palette.white,
    },
    genderOptions: {
        marginBottom: verticalScale(180),
    },
    title: {
        width: horizontalScale(350),
        textAlign: 'left',
        fontSize: moderateScale(30),
        lineHeight: verticalScale(32.19),
        marginBottom: verticalScale(70),
        paddingHorizontal: horizontalScale(10),
        color: palette.white,
    },
    button: {
        width: horizontalScale(347),
        height: verticalScale(44),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(15),
        marginBottom: verticalScale(20),
        borderWidth: verticalScale(0.5),
        backgroundColor: palette.primary_blue,
        borderColor: palette.white
    },
    activeButton: {
        backgroundColor: palette.light_blue,
        borderColor: palette.light_blue
    },
    genderBtn: {
        textAlign: 'center',
        fontSize: moderateScale(16),
        lineHeight: verticalScale(19.36),
        color: palette.white
    },
});

export default styles;