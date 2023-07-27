import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenderScreen from '../screens/Gender';
import MeasurementsScreen from '../screens/Measurements';
import DevicePositionScreen from '../screens/DevicePosition';
import InstructionsScreen from '../screens/Instructions';
import CameraFrontScreen from '../screens/CameraFront';
import CameraSideScreen from '../screens/CameraSide';
import ScannedScreen from '../screens/Scanned';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="Measurements" component={MeasurementsScreen} />
      <Stack.Screen name="DevicePosition" component={DevicePositionScreen} />
      <Stack.Screen name="Instructions" component={InstructionsScreen} />
      <Stack.Screen name="CameraFront" component={CameraFrontScreen} />
      <Stack.Screen name="CameraSide" component={CameraSideScreen} />
      <Stack.Screen name="Scanned" component={ScannedScreen} />
    </Stack.Navigator>
  );
}

export default memo(StackNavigation);