import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import MainPage from '../screens/MainPage';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={MainPage} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
