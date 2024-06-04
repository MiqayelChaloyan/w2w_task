import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: horizontalScale(167),
        bottom: verticalScale(60),
        zIndex: 2
    },
});

export default styles;
