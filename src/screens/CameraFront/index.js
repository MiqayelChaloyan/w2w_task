import PropTypes from 'prop-types';
import { useContext, useRef, useCallback, memo, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { GlobalDataContext } from '../../contexts/context';
import { cameraButtonURL } from '../../constans/imagePath';
import CameraPreview from '../../components/camera';
import CountdownTimer from '../../components/countdownTimer';
import styles from './style';

function CameraFrontScreen({ navigation }) {
  const { data, setData } = useContext(GlobalDataContext);
  const camera = useRef(null);

  const [isCorrectDevicePosition, setIsCorrectDevicePosition] = useState(true);

  const capturePhoto = useCallback(async (timer) => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setData({ ...data, front: 'file://' + photo.path });
      return navigation.navigate({
        name: 'CameraSide',
        params: { timer },
    });
    }
  }, []);

  
  const handleCorrectDevicePosition = (deg90, portrait) => {
    setIsCorrectDevicePosition(deg90 && portrait)
  };

  console.log(isCorrectDevicePosition, 'front')
  
  return (
    <CameraPreview camera={camera} pictureForm='Front photo' handleCorrectDevicePosition={handleCorrectDevicePosition}>
      <View>
        {/* <TouchableOpacity disabled={!isCorrectDevicePosition} onPress={()=>capturePhoto(15)} style={styles.button(isCorrectDevicePosition)}>
          <Image style={styles.capture} source={cameraButtonURL} />
        </TouchableOpacity> */}
        <CountdownTimer capturePhoto={capturePhoto} disabled={!isCorrectDevicePosition} device='front'/>
      </View>
    </CameraPreview>
  );
}

CameraFrontScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(CameraFrontScreen);
