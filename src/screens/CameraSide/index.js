import PropTypes from 'prop-types';
import { useContext, useRef, useCallback, memo, useState, useEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { GlobalDataContext } from '../../contexts/context';
import { arrowUrl, cameraButtonURL, frontURL, profileURL } from '../../constans/imagePath';
import CameraPreview from '../../components/camera';
import CountdownTimer from '../../components/countdownTimer';
import { sendDataToServer } from '../../utils';
import Loading from '../../components/loading';
import ErrorModal from '../../components/modal';
import styles from './style';

function CameraSideScreen({ navigation }) {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isDrawingOrder, setDrawingOrder] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDrawingOrder(false)
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  const { data } = useContext(GlobalDataContext);
  const camera = useRef(null);

  const capturePhoto = useCallback(async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto();

      try {
        setLoading(true)
        const result = await sendDataToServer(data, 'file://' + photo.path);

        if (result) {
          setLoading(false);
          return navigation.navigate({
            name: 'Scanned',
            params: { data: result },
            merge: true,
          });
        }
      } catch (error) {
        setError(true)
      }
    }
  }, []);

  return (
    <CameraPreview camera={camera} pictureForm='Side photo'>
      <ErrorModal modalVisible={isError} setModalVisible={setError} navigation={navigation} />
      {isLoading && <Loading />}
      {
        isDrawingOrder && (
          <View style={styles.drawingOrder}>
            <Image style={styles.frontURL} source={frontURL} />
            <Image style={styles.arrowUrl} source={arrowUrl} />
            <Image style={styles.profileURL} source={profileURL} />
          </View>
        )
      }
      <View>
        <TouchableOpacity onPress={capturePhoto} style={styles.button}>
          <Image style={[styles.capture, { opacity: isLoading ? 0.5 : 2 }]} source={cameraButtonURL} />
        </TouchableOpacity>
        <CountdownTimer capturePhoto={capturePhoto} />
      </View>
    </CameraPreview>
  );
}

CameraSideScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(CameraSideScreen);
