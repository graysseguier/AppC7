import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import React from 'react';
import {Text, Image} from 'react-native';

import MapScreen from '../../screens/MapScreen';

const Stack = createNativeStackNavigator();

function MapStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Map" 
          component={MapScreen} 
          headerShown={true}
          options={{
            headerTitle: "Map",
            headerTitleAlign: 'center',
            headerLeft: (props) => {
              return (
                <>
                  <Text>Menu</Text>
                  {props.canGoBack && <HeaderBackButton {...props} />}
                </>
              );
            },
            headerRight: () => {
              <Image source={require('../../assets/icon.png')} style={{height:40, width:40, resizeMode: 'contain', tintColor: 'white'}} />
            }
            
          }}  />
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