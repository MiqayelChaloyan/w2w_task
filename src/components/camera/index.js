import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { Linking, StatusBar, Text, View } from 'react-native';

import { useCameraDevices, Camera } from 'react-native-vision-camera';
import { setUpdateIntervalForType, SensorTypes, accelerometer } from 'react-native-sensors';

import styles from './style';


function CameraPreview({ children, camera, pictureForm, handleCorrectDevicePosition }) {
    const devices = useCameraDevices();
    const device = devices.back;
    const [isCorrectDevicePosition, setIsCorrectDevicePosition] = useState(true);

    setUpdateIntervalForType(SensorTypes.accelerometer, 500);

    let t = 10;
    let maxZ = -0.5;
    let minY = 9.5;
    let sign = -1;


    if(Platform.OS === 'android') {
        t = 1;
        sign = 1;
        maxZ = 1.8;
        minY = 9.5;
    }

    useEffect(() => {
        // async function getPermission() {
        //     const permission = await Camera.requestCameraPermission();
        //     if (permission === 'danied') await Linking.openSettings({ flash: 'on' });
        // }
        // getPermission()

        // accelerometer.subscribe(({ x, y, z }) => {
        //     handleCorrectDevicePosition(z < 1.8 && z > -1.8, y > 9.5);
        //     setIsCorrectDevicePosition(z < 1.8 && z > -1.8 && y > 9.5)
        // });

        accelerometer.subscribe(({ x, y, z }) => {
            handleCorrectDevicePosition(t*z < maxZ && t*z > -1.8, sign*t*y > minY);
            setIsCorrectDevicePosition(t*z < maxZ && t*z > -1.8 && sign*t*y > minY)
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
