import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { Linking, Platform, StatusBar, Text, View } from 'react-native';
import { useCameraDevices, Camera } from 'react-native-vision-camera';
import styles from './style';

import { setUpdateIntervalForType, SensorTypes, accelerometer } from 'react-native-sensors';
import { log } from 'console';
import { platform } from 'os';


function CameraPreview({ children, camera, pictureForm, handleCorrectDevicePosition }) {
    const devices = useCameraDevices();
    const device = devices.front;

    // const [isRecording, setIsRecording] = useState(true);
    const [isCorrectDevicePosition, setIsCorrectDevicePosition] = useState(true);
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
    setUpdateIntervalForType(SensorTypes.accelerometer, 500);

    useEffect(() => {
        // async function getPermission() {
        //     const permission = await Camera.requestCameraPermission();
        //     if (permission === 'danied') await Linking.openSettings({ flash: 'on' });
        // }
        // getPermission()
        accelerometer.subscribe(({ x, y, z }) => {
            handleCorrectDevicePosition(t*z < maxZ && t*z > -1.8, sign*t*y > minY);
            setIsCorrectDevicePosition(t*z < maxZ && t*z > -1.8 && sign*t*y > minY)
        });
    }, []);

    if (device == null) {
        return null
    };


    // TODO --------------------------------------------
    // TODO: This part is for a test and will be changed lately.

    // const [deg90, setDeg90] = useState(true);
    // const [portrait, setPortrait] = useState(true);
    // const [isRecording, setIsRecording] = useState(true);


    // useEffect( () => {
    //     const subscription = accelerometer.subscribe(({ x, y, z }) => {
    //         // setDeg90(z < 1.8 && z > -1.8);
    //         // setPortrait(y > 9.8)
    //         console.log(x, y, z)

    //     });
    //     return () => {
    //         subscription.unsubscribe();
    //     };
    // }, []);

    // TODO: This part is for a test and will be changed lately.
    // ??
    // useEffect(() => {
    //     (async () => {
    //         const cameraPermissionStatus = await Camera.requestCameraPermission();
    //         setCameraPermission(cameraPermissionStatus);
    //     })();
    // }, []);

    // TODO --------------------------------------------

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
            {/* <View style={styles.lineLeft(isCorrectDevicePosition)} /> */}
            {/* <View style={styles.lineRight(isCorrectDevicePosition)} /> */}

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
