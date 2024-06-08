import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserGenderSelection from '../screens/UserGender';
import Measurements from '../screens/Measurements';
import DevicePosition from '../screens/DevicePosition';
import Instructions from '../screens/Instructions';
import CameraFront from '../screens/CameraFront';
import CameraSide from '../screens/CameraSide';
import ScannedScreen from '../screens/Scanned';

import { PageName } from '../constans';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PageName.gender} component={UserGenderSelection} />
      <Stack.Screen name={PageName.measurements} component={Measurements} />
      <Stack.Screen name={PageName.devicePosition} component={DevicePosition}/>
      <Stack.Screen name={PageName.instructions} component={Instructions} />
      <Stack.Screen name={PageName.cameraFront} component={CameraFront} />
      <Stack.Screen name={PageName.cameraSide} component={CameraSide} />
      <Stack.Screen name={PageName.scann} component={ScannedScreen} />
    </Stack.Navigator>
  );
}

export default memo(StackNavigation);