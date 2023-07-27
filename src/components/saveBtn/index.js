import PropTypes from 'prop-types';
import { memo, useCallback } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { backgroundURL, cameraURL } from '../../constans/imagePath';
import styles from './style';

const SaveButton = ({ handleSave, activeButton, screen }) => {
    const isGenderScreen = screen === 'Gender';

    const renderContent = useCallback(() => {
        if (isGenderScreen) {
            return <Text style={styles.saveBtn}>Save</Text>;
        } else {
            return <Image style={styles.cameraBtn} source={cameraURL} />;
        }
    }, [isGenderScreen]);

    const handlePress = useCallback(() => {
        if (activeButton) {
            handleSave();
        }
    }, [activeButton, handleSave]);

    return (
        <ImageBackground style={styles.backgroundURL} source={backgroundURL}>
            <TouchableOpacity
                onPress={handlePress}
                style={[
                    isGenderScreen ? styles.button : styles.cameraButton,
                    !activeButton && styles.activeButton
                ]}
            >
                <View>{renderContent()}</View>
            </TouchableOpacity>
        </ImageBackground>
    );
};

SaveButton.propTypes = {
    handleSave: PropTypes.func.isRequired,
    activeButton: PropTypes.string,
    screen: PropTypes.string.isRequired,
};

export default memo(SaveButton);
