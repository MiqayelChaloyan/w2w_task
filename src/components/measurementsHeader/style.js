import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Styles } from '../../constans';
import { horizontalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: Styles.center,
        paddingHorizontal: horizontalScale(30),
    },
    back: {
        flex: 0.5,
        width: horizontalScale(80),
        height: RFValue(24),
        justifyContent: Styles.center
    },
    textView: {
        alignItems: Styles.center
    },
    text: {
        fontSize: Styles.appTextFontSize,
        color: colors.white ,
        lineHeight: RFValue(24),
        fontWeight: Styles.fontWeightMedium,
        fontFamily: Styles.fontFamily
    }
});

export default styles;