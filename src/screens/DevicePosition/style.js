import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';
import { Styles } from '../../constans';
import { RFValue } from 'react-native-responsive-fontsize';

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
    },
    devicePosition: {
        width: horizontalScale(200),
        height: RFValue(110),
        flexDirection: 'row',
        alignSelf: Styles.center,
    },
});

export default styles;