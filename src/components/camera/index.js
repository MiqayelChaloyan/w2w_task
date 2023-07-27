import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { Linking, StatusBar, Text, View } from 'react-native';
import { useCameraDevices, Camera } from 'react-native-vision-camera';
import styles from './style';

function CameraPreview({ children, camera, pictureForm }) {
    const devices = useCameraDevices();
    const device = devices.front;

    useEffect(() => {
        async function getPermission() {
            const permission = await Camera.requestCameraPermission();
            if (permission === 'danied') await Linking.openSettings({ flash: 'on' });
        }
        getPermission()
    }, []);

    if (device == null) {
        return null
    }

    return device && (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Camera
                ref={camera}
                device={device}
                isActive={true}
                photo={true}
                preset={"hd-1280x720"}
                style={styles.camera}
            />
            <Text style={styles.pictureForm}>{pictureForm}</Text>
            <View style={styles.lineLeft} />
            <View style={styles.lineRight} />
            {children}
            <View style={styles.size} />
        </>
    )
}

CameraPreview.propTypes = {
    children: PropTypes.node.isRequired,
    camera: PropTypes.object.isRequired,
    pictureForm: PropTypes.string.isRequired,
};

export default memo(CameraPreview);
