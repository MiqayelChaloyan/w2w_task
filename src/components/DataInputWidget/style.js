import { StyleSheet } from 'react-native';
import { Styles } from '../../constans';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';
// import { horizontalScale, verticalScale } from '@assets/metrics';
// import { colors } from '@constants/colors';
// import { Styles } from '@constants';

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: colors.white,
        justifyContent: Styles.center,
        alignItems: Styles.center,
        borderRadius: verticalScale(70),
        paddingHorizontal: horizontalScale(40),
        padding: horizontalScale(40),
        bottom: 0,
    },
    input: {
        padding: horizontalScale(5),
        borderWidth: verticalScale(1),
        borderColor: colors.darkBlue,
        width: Styles.fullSize,
        marginBottom: verticalScale(20),
        borderRadius: verticalScale(5),
        marginTop: verticalScale(10),
        fontFamily: Styles.fontFamily,
        color: colors.darkBlue
    },
    close: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
    buttonContainer: {
        marginTop: verticalScale(10),
        justifyContent: Styles.center,
        alignSelf: Styles.center,
    },
    title: {
        fontSize: Styles.inputModalTitleFontSize,
        marginTop: verticalScale(20),
        marginBottom: verticalScale(10),
        color: colors.darkBlue,
        fontFamily: Styles.fontFamily,
        fontWeight: Styles.fontWeightLight,
    },
    inputContainer: {
        width: horizontalScale(290),
    },
});

export default styles;