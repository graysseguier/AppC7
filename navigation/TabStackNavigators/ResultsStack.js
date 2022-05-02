// IMPORTS :
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultsScreen from '../../screens/ResultsScreen';

const Stack = createNativeStackNavigator();

function ResultsStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Results" component={ResultsScreen} headerShown={false} />
        </Stack.Navigator>
    )
}
/*
// ResultStack
const screens = {
    Results: ResultsScreen,
  };

  const ResultsStack = createStackNavigator(
    screens, 
    { defaultNavigationOptions: { header: null }
    },
  );
  */

export default ResultsStack;