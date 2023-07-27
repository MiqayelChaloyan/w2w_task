import PropTypes from 'prop-types';
import { useContext, useRef, useCallback, memo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { GlobalDataContext } from '../../contexts/context';
import { cameraButtonURL } from '../../constans/imagePath';
import CameraPreview from '../../components/camera';
import CountdownTimer from '../../components/countdownTimer';
import styles from './style';

function CameraFrontScreen({ navigation }) {
  const { data, setData } = useContext(GlobalDataContext);
  const camera = useRef(null);

  const capturePhoto = useCallback(async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});

      setData({ ...data, front: 'file://' + photo.path });
      return navigation.navigate('CameraSide');
    }
  }, []);

  return (
    <CameraPreview camera={camera} pictureForm='Front photo'>
      <View>
        <TouchableOpacity onPress={capturePhoto} style={styles.button}>
          <Image style={styles.capture} source={cameraButtonURL} />
        </TouchableOpacity>
        <CountdownTimer capturePhoto={capturePhoto} />
      </View>
    </CameraPreview>
  );
}

CameraFrontScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(CameraFrontScreen);
