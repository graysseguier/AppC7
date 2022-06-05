//IMPORTS 
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import React from 'react';
import {Text, Image} from 'react-native';
import InfosScreen from '../../screens/InfosScreen';

const Stack = createNativeStackNavigator();

function InfosStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Infos" 
          component={InfosScreen} 
          headerShown={true}
          options={{
            headerTitle: "Infos",
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