import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';


const styles = StyleSheet.create({
    container:(disabled) => ({
        width: horizontalScale(Platform.OS === 'ios' ? 60 : 55),
        height: RFValue(50),
        backgroundColor: disabled ? colors.gray : colors.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFValue(50),
    }),
});

export default styles;
