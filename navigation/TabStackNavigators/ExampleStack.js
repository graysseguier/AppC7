//IMPORTS
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import ExampleScreen from '../../screens/ExampleScreen';

//CONSTS

const Stack = createNativeStackNavigator();

function ExampleStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name={Example1} component={ExampleScreen} headerShown={false} />
      <Stack.Screen name={Example2} component={ExampleScreen} headerShown={false} />
    </Stack.Navigator>
  )
}
/*
const screens = {

  Example1: {
    screen: ExampleScreen, //screen de la page d'accueil de cet onglet
  },

  Example2: {
    screen: ExampleScreen, // insérer ici le screen correspondant à une page inférieure
  },

};
*/

//STACK NAVIGATOR :

/*
const ProgramStack = createStackNavigator(
  
  screens, 
  {
    defaultNavigationOptions: {
      header: null, // Le Header est déjà affiché dans le screen comme default component
    }
  }
);
*/

//EXPORTS :

export default ExampleStack;