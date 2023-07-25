import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.primary_blue,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: palette.white,
        fontSize: moderateScale(12),
        textTransform: 'uppercase',
        marginBottom: verticalScale(50),
        top: verticalScale(20),
    },
    inputContain: {
        marginVertical: verticalScale(20)
    },
    headerText: {
        color: palette.white,
        fontSize: moderateScale(25)
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