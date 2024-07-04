import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './Routes';
import MainPage from '../screens/MainPage';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DonateScreen from '../screens/DonateScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="RegisterScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="DonateScreen" component={DonateScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
