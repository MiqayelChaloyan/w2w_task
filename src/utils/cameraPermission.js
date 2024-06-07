import { Platform } from "react-native";
import { PERMISSIONS, RESULTS, check } from 'react-native-permissions';
import { Camera } from "react-native-vision-camera";

export const requestCameraPermission = async (navigation, from, to) => {

    const checkPermission = Platform.select({
        android: PERMISSIONS.ANDROID.CAMERA,
        ios: PERMISSIONS.IOS.CAMERA
    })
    let res = await check(checkPermission);
    if (res === RESULTS.GRANTED) {
        navigation.navigate(from);
        return;
    }

    res = await Camera.requestCameraPermission();
      switch (res) {
        case RESULTS.BLOCKED:
            navigation.navigate(to);
          break;
        case RESULTS.GRANTED:
            navigation.navigate(from);
          break;
        default:
            navigation.navigate(from);
          break;
      }
};

