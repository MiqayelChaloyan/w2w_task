import { NavigationContainer } from '@react-navigation/native';
import GlobalData from './src/contexts/context';
import StackNavigation from './src/navigation';

function App() {
  return (
    <GlobalData>
      <NavigationContainer>
          <StackNavigation />
      </NavigationContainer>
    </GlobalData>
  );
}

export default App;