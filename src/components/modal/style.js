import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: verticalScale(4),
    },
    modalView: {
        width: horizontalScale(345),
        margin: verticalScale(20),
        borderRadius: verticalScale(20),
        padding: verticalScale(40),
        alignItems: 'center',
        shadowColor: palette.white,
        shadowOffset: {
            width: 0,
            height: verticalScale(2),
        },
        shadowOpacity: verticalScale(0.25),
        shadowRadius: verticalScale(4),
        elevation: verticalScale(5),
        backgroundColor: palette.white,
    },
    button: {
        borderRadius: verticalScale(20),
        padding: verticalScale(10),
        elevation: verticalScale(2),
    },
    buttonClose: {
        backgroundColor: palette.red,
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: palette.white,
    },
    modalText: {
        marginBottom: verticalScale(15),
        textAlign: 'center',
    },
});

export default styles;