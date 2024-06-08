import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

// import { CameraIcon } from '@constants';
// import { colors } from '@constants/colors';
// import { horizontalScale } from '@assets/metrics';

import styles from './style';
import { horizontalScale } from '../../assets/metrics/metrics';
import { colors } from '../../constans/colors';
import { CameraIcon } from '../../constans';


const CameraButton = ({ disabled, onPress }) => {
    return (
        <TouchableOpacity style={styles.container(disabled)} onPress={onPress}>
            <CameraIcon width={horizontalScale(35)} height={RFValue(35)} fill={colors.white} />
        </TouchableOpacity>
    )
};

CameraButton.propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool
};

export default CameraButton; 