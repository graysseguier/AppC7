//IMPORTS

import { createNativeStackNavigator} from '@react-navigation/native-stack';

import ProgramScreen from '../../screens/ProgramScreen';
import Program2 from '../../screens/Program2';

const Stack = createNativeStackNavigator();

function ProgramStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Program1" component={ProgramScreen} headerShown={false} />
          <Stack.Screen name="Program2" component={Program2} headerShown={false} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
//CONSTS

const screens = {

  Program1: {
    screen: ProgramScreen,
  },

  Program2: {
    screen: Program2,
  },

};

//STACK NAVIGATOR :

const ProgramStack = createStackNavigator(
  
  screens, 
  {
    defaultNavigationOptions: {
      header: null,
    }
  }
);
*/
//EXPORTS :

export default ProgramStack;