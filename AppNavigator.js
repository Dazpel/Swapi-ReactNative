import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
  import Home from './Home';
  import Persona from './Persona';
  import Planets from './Planets';

  const Stack = createStackNavigator({
    Home: { screen: Home },
    Character: { screen: Persona},
    Planets: { screen: Planets},
  });

const AppNavigator = createAppContainer(Stack)
  export default AppNavigator;