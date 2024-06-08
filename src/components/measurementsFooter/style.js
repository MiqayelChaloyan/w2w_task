import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Styles } from '../../constans';
import { colors } from '../../constans/colors';
import { horizontalScale } from '../../assets/metrics/metrics';
// import { colors } from '@constants/colors';
// import { Styles } from '@constants';
// import { horizontalScale } from '@assets/metrics';

const styles = StyleSheet.create({
    container: {
        width: Styles.fullSize,
        height: RFValue(190),
    },
    header1: {
        backgroundColor: colors.lotDarkCyan,
    },
    header2: {
        height: RFValue(71),
        borderBottomEndRadius: RFValue(60),
        backgroundColor: colors.darkBlue,
    },
    body1: {
        backgroundColor: colors.darkBlue,
    },
    body2: {
        justifyContent: Styles.center,
        alignItems: Styles.center,
        height: RFValue(120),
    },
    linearGradientStyle: {
        borderTopLeftRadius: RFValue(70),
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: Styles.center,
        width: horizontalScale(250),
    }
});

export default styles;
