import PropTypes from 'prop-types';
import { memo, useCallback } from 'react';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';
import { Platform } from "react-native";
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './style';

function InstructionsCamera({ navigation, screen, children }) {

    const handleChangeScreen = useCallback(async () => {
        if (screen === "CameraFront") {
            const checkPermission = Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA;
            await request(checkPermission);
            const res = await check(checkPermission);
            if (res === RESULTS.GRANTED) {
                return navigation.navigate(screen);
            } else {
                console.error('Error: Camera Permission')
            }
        } else {
            return navigation.navigate(screen);
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                {children}
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleChangeScreen}>
                    <Image
                        style={styles.gotItBtn}
                        source={require('../../assets/images/Button.png')}
                    />
                </TouchableOpacity>
                <View style={styles.line} />
            </View>
        </View>
    );
}

InstructionsCamera.propTypes = {
    navigation: PropTypes.object.isRequired,
    screen: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default memo(InstructionsCamera);
