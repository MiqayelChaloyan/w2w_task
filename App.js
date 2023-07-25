import { NavigationContainer } from '@react-navigation/native';
import GlobalData from './src/contexts/context';
import StackNavigation from './src/navigation';
import MyStatusBar from './src/components/statusBar';

function App() {
  return (
    <GlobalData>
      <NavigationContainer>
        <MyStatusBar>
          <StackNavigation />
        </MyStatusBar>
      </NavigationContainer>
    </GlobalData>
  );
}

export default App;