import { createNativeStackNavigator} from '@react-navigation/native-stack';

import MapScreen from '../../screens/MapScreen';

const Stack = createNativeStackNavigator();

function MapStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} headerShown={false} />
      </Stack.Navigator>
    )
}

/*
// PlanStack
const screens = {
    Map: MapScreen,
  };

  const MapStack =  createStackNavigator(
    screens, 
    { defaultNavigationOptions: { header: null }
    }
  );
  */

export default MapStack;