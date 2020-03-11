import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from './pages/Welcome';
import Perfil from './pages/Perfil';
const Routes = createStackNavigator(
  {
    Welcome: Welcome,
    Perfil: Perfil,
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(Routes);
