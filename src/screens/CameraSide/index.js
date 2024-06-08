import PropTypes from 'prop-types';
import { useRef, useCallback, memo, useState, useEffect } from 'react';
import { Image, View } from 'react-native';

import { useSelector } from 'react-redux';

import CameraPreview from '../../components/camera';
import CountdownTimer from '../../components/countdownTimer';
import Loading from '../../components/loading';
import ErrorModal from '../../components/modal';

import { sendDataToServer } from '../../utils';

import { ImagePaths, PageName } from '../../constans';

import styles from './style';


function CameraSide({ navigation, route }) {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isDrawingOrder, setDrawingOrder] = useState(true);
  const [isCorrectDevicePosition, setIsCorrectDevicePosition] = useState(true);
  const state = useSelector(state => state.state);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDrawingOrder(false)
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  const camera = useRef(null);

  const capturePhoto = useCallback(async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto();

      try {
        setLoading(true)
        const result = await sendDataToServer(state, 'file://' + photo.path);
        if (result.shoulder) {
          setLoading(false);
          return navigation.navigate({
            name: PageName.scann,
            params: { data: result },
            merge: true,
          });
        }
        setError(true);
      } catch (error) {
        setError(true);
      }
    }
  }, []);

  const handleCorrectDevicePosition = (deg90, portrait) => {
    setIsCorrectDevicePosition(deg90 && portrait)
  };

  return (
    <CameraPreview camera={camera} pictureForm='Side photo' handleCorrectDevicePosition={handleCorrectDevicePosition}>
      <ErrorModal
        modalVisible={isError}
        setModalVisible={setError}
        navigation={navigation}
      />
      {isLoading && <Loading />}
      {
        isDrawingOrder && (
          <View style={styles.drawingOrder}>
            <Image style={styles.frontURL} source={ImagePaths.front} />
            <Image style={styles.arrowUrl} source={ImagePaths.arrow} />
            <Image style={styles.profileURL} source={ImagePaths.profile} />
          </View>
        )
      }
      <View>
        <CountdownTimer
          capturePhoto={capturePhoto}
          disabled={!isCorrectDevicePosition}
          device='side'
          timer={route?.params?.timer}
        />
      </View>
    </CameraPreview>
  );
}

CameraSide.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(CameraSide);
