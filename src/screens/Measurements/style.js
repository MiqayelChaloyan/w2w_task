import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';
import { Styles } from '../../constans';
import { RFValue } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBlue,
        justifyContent: 'space-between',
    },
    header: {
        marginTop: verticalScale(60),
    },
    main: {
        alignItems: Styles.center,
        margin: horizontalScale(5),
        marginBottom: verticalScale(5),
    },
    title: {
        color: colors.white,
        textAlign: Styles.center,
        fontSize: RFValue(20),
        fontFamily: Styles.fontFamily,
    },
    scilet: {
        resizeMode: 'contain',
        width: horizontalScale(375),
        height: RFValue(320),
    },
    size: {
        position: 'absolute',
        top: '45%',
        right: '26%',
        backgroundColor: colors.cyan,
        padding: horizontalScale(5),
        borderRadius: horizontalScale(5),
        width: horizontalScale(70),
    },
    sizeText: {
        color: colors.white,
        fontSize: RFValue(14),
        textAlign: Styles.center,
        fontFamily: Styles.fontFamily,
    },
    section: {
        position: 'relative',
    },
    highlightedButton: {
        position: 'absolute',
        zIndex: 5,
        top: '56.5%',
        alignSelf: Styles.center,
    },
    headerText: {
        color: colors.white,
        fontSize: RFValue(20),
        textAlign: Styles.center,
        fontFamily: Styles.fontFamily,
    }
});

export default styles;
