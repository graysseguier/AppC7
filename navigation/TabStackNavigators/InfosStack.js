//IMPORTS 
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import InfosScreen from '../../screens/InfosScreen';

const Stack = createNativeStackNavigator();

function InfosStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Infos" component={InfosScreen} headerShown={false} />
      </Stack.Navigator>
    )
}

/*
// InfosStack
const screens = {
    Infos: InfosScreen,
  };

const InfosStack =  createStackNavigator(
  screens, 
  { defaultNavigationOptions: { header: null }
  }
);
*/

export default InfosStack;