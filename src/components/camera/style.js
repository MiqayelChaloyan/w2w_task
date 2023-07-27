import { StyleSheet } from 'react-native';
import palette from '../../assets/theme/theme';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/metrics/metrics';

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    size: {
        borderLeftWidth: horizontalScale(4),
        borderTopWidth: verticalScale(4),
        borderRightWidth: horizontalScale(4),
        width: horizontalScale(290),
        height: verticalScale(653.5),
        position: 'absolute',
        borderRadius: verticalScale(10),
        marginHorizontal: horizontalScale(45),
        marginVertical: verticalScale(70.2),
        borderColor: palette.light_blue,
    },
    pictureForm: {
        fontSize: moderateScale(18),
        marginHorizontal: horizontalScale(135),
        top: 30,
        position: 'absolute',
        color: palette.white
    },
    lineLeft: {
        width: horizontalScale(50),
        height: verticalScale(4),
        position: 'absolute',
        bottom: verticalScale(119),
        right: horizontalScale(44),
        borderBottomWidth: horizontalScale(4),
        borderColor: palette.light_blue,
        borderRadius: verticalScale(15)
    },
    lineRight: {
        width: horizontalScale(50),
        height: verticalScale(4),
        position: 'absolute',
        bottom: verticalScale(119),
        left: horizontalScale(49),
        borderBottomWidth: horizontalScale(4),
        borderColor: palette.light_blue,
        borderRadius: verticalScale(15)
    },
});

export default styles;