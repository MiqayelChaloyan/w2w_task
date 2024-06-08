import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { Linking, StatusBar, Text, View } from 'react-native';

import { useCameraDevices, Camera } from 'react-native-vision-camera';
import { setUpdateIntervalForType, SensorTypes, accelerometer } from 'react-native-sensors';

import styles from './style';


function CameraPreview({ children, camera, pictureForm, handleCorrectDevicePosition }) {
    const devices = useCameraDevices();
    const device = devices.front;
    const [isCorrectDevicePosition, setIsCorrectDevicePosition] = useState(true);

    setUpdateIntervalForType(SensorTypes.accelerometer, 500);

    useEffect(() => {
        async function getPermission() {
            const permission = await Camera.requestCameraPermission();
            if (permission === 'danied') await Linking.openSettings({ flash: 'on' });
        }
        getPermission()

        accelerometer.subscribe(({ x, y, z }) => {
            handleCorrectDevicePosition(z < 1.8 && z > -1.8, y > 9.5);
            setIsCorrectDevicePosition(z < 1.8 && z > -1.8 && y > 9.5)
        });
    }, []);

    if (device == null) {
        return null
    };


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
            {children}
            <View style={styles.size(isCorrectDevicePosition)} />
        </>
    )
}

CameraPreview.propTypes = {
    children: PropTypes.node.isRequired,
    camera: PropTypes.object.isRequired,
    pictureForm: PropTypes.string.isRequired,
};

export default memo(CameraPreview);
