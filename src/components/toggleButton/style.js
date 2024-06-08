import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';
import { Styles } from '../../constans';


const styles = StyleSheet.create({
    triangle: {
        marginTop: verticalScale(10),
        // transform: [{ rotate: "180deg" }],
    },
    text: (fontSize) => ({
        color: colors.white,
        marginHorizontal: horizontalScale(20),
        fontSize: RFValue(fontSize),
        fontFamily: Styles.fontFamily,
    }),
    toggleText: {
        flexDirection: 'row',
    },
    trackBar: (width) => ({
        activeBackgroundColor: "transparent",
        inActiveBackgroundColor: "transparent",
        width: horizontalScale(width),
    }),
    trackButton: {
        width: horizontalScale(30),
        height: 0,
    },
});

export default styles;
