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
    header: {
        flexDirection: 'row',
    },
    title: {
        textAlign: 'center',
        fontSize: moderateScale(12),
        textTransform: 'uppercase',
        marginBottom: verticalScale(50),
        top: verticalScale(50),
        color: palette.white,
    },
    arrow: {
        width: horizontalScale(20),
        right: horizontalScale(70),
        top: verticalScale(48),
        color: palette.white,
    },
    inputContain: {
        marginVertical: verticalScale(10)
    },
    headerText: {
        color: palette.white,
        fontSize: moderateScale(25),
        paddingVertical: verticalScale(15)
    },
    AverageFemaleBody: {
        width: horizontalScale(395),
        height: verticalScale(410),
        position: 'relative'
    },
    VerticalLine: {
        position: 'absolute',
        width: horizontalScale(18.27),
        height: verticalScale(420),
        marginHorizontal: horizontalScale(188)
    }
});

export default styles;