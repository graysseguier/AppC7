// IMPORTS
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import BugScreen from '../../screens/BugScreen';

const Stack = createNativeStackNavigator();

function BugStackScreen() {
    return (
        <Stack.Navigator>
                <Stack.Screen name="Bugstack" component={BugScreen} headerShown={false} />
        </Stack.Navigator>
    )
}

/*
// Constants :

const screens = {
  Bug: BugScreen,
};


// BugStack
const BugStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }}
);

*/

export default BugStackScreen