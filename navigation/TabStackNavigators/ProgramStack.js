//IMPORTS
import React from 'react';
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import {Text, Image} from 'react-native';

import ProgramScreen from '../../screens/ProgramScreen';
import Program2 from '../../screens/Program2';

const Stack = createNativeStackNavigator();

function ProgramStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Program1" 
            component={ProgramScreen} 
            options={{headerShown: false}}
            />
          <Stack.Screen 
            name="Program2" 
            component={Program2}
            options={{
              title: "Program sub screen",
              headerTitleAlign: 'center',
              headerRight: () => {
                <Image source={require('../../assets/images/icon.png')} style={{height:40, width:40, resizeMode: 'contain', tintColor: 'white'}} />
              }
              
            }}  />
        </Stack.Navigator>
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