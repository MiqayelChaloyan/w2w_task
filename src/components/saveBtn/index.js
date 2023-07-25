import PropTypes from 'prop-types';
import { memo } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import bg from '../../assets/images/bg.png';
import styles from './style';

function SaveButton({ handleSave }) {
    return (
        <ImageBackground style={styles.bg} source={bg}>
            <TouchableOpacity onPress={handleSave}>
                <View style={styles.button}>
                    <Text style={styles.saveBtn}>Save</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    )
}

SaveButton.propTypes = {
    handleSave: PropTypes.func.isRequired,
};

export default memo(SaveButton);