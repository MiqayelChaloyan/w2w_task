import {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GenderScreen from '../screens/Gender';
import MeasurementsScreen from '../screens/Measurements';
import DevicePositionScreen from '../screens/DevicePosition';
import InstructionsScreen from '../screens/Instructions';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Gender" component={GenderScreen} /> 
      <Stack.Screen name="Measurements" component={MeasurementsScreen} />
      <Stack.Screen name="DevicePosition" component={DevicePositionScreen} />
      <Stack.Screen name="Instructions" component={InstructionsScreen} />
    </Stack.Navigator>
  );
}

export default memo(StackNavigation);