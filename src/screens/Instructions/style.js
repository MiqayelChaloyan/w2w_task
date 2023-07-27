import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearPoints: {
        position: 'absolute',
        top: verticalScale(130),
        right: horizontalScale(10)
    },
    frontLook: {
        width: horizontalScale(100),
        height: verticalScale(148),
    },
    sideLook: {
        width: horizontalScale(57),
        height: verticalScale(148),
    },
    degree: {
        width: horizontalScale(140),
        height: verticalScale(148),
        right: horizontalScale(55),
        top: verticalScale(33)
    },
    boldText: {
        fontWeight: 'bold',
    },
    text: {
        color: 'black',
        fontSize: moderateScale(14),
        textAlign: 'left',
        marginHorizontal: horizontalScale(20),
        marginBottom: verticalScale(20)
    },
    textContain: { 
        marginTop: verticalScale(50),
    }
});

export default styles;