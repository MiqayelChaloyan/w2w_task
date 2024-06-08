import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    drawingOrder: {
        position: 'absolute',
        flexDirection: 'row',
        top: verticalScale(290),
        marginHorizontal: horizontalScale(85)
    },
    frontURL: {
        width: horizontalScale(120),
        height: verticalScale(170)
    },
    arrowUrl: {
        width: horizontalScale(20),
        height: verticalScale(20),
        top: verticalScale(80)
    },
    profileURL: {
        width: horizontalScale(70),
        height: verticalScale(170)
    }
});

export default styles;