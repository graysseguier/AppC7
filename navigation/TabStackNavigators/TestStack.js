// IMPORTS
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import TestScreen from '../../screens/TestScreen';
import BarreMenu from '../../components/BarreMenu';

const Stack = createNativeStackNavigator();

function TestStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="Test" component={TestScreen} headerShown={false} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
// Constants :

const screens = {
  Test: TestScreen,
};


// ContactsStack
const TestStack = createStackNavigator(
  screens,
  { defaultNavigationOptions: {
    header: null,
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Test'} logo={'ios-podium'}/>
    )
  }
  }
);
*/

export default TestStack;
