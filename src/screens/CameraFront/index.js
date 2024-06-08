import PropTypes from 'prop-types';
import { useRef, useCallback, memo, useState } from 'react';

import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { addValue } from '../../store/stateSlice';

import CameraPreview from '../../components/camera';
import CountdownTimer from '../../components/countdownTimer';
import { PageName } from '../../constans';


function CameraFront({ navigation }) {
  const state = useSelector(state => state.state);
  const camera = useRef(null);
  const dispatch = useDispatch();

  const [isCorrectDevicePosition, setIsCorrectDevicePosition] = useState(true);

  const capturePhoto = useCallback(async (timer) => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      dispatch(addValue({ ...state, front: 'file://' + photo.path  }));

      return navigation.navigate({
        name: PageName.cameraSide,
        params: { timer },
    });
    }
  }, []);

  const handleCorrectDevicePosition = (deg90, portrait) => {
    setIsCorrectDevicePosition(deg90 && portrait)
  };

  return (
    <CameraPreview camera={camera} pictureForm='Front photo' handleCorrectDevicePosition={handleCorrectDevicePosition}>
      <View>
        <CountdownTimer capturePhoto={capturePhoto} disabled={!isCorrectDevicePosition} device='front'/>
      </View>
    </CameraPreview>
  );
}

CameraFront.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(CameraFront);
