//IMPORTS
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import React from 'react';
import {Text, Image} from 'react-native';

import ExampleScreen from '../../screens/ExampleScreen';

//CONSTS

const Stack = createNativeStackNavigator();

function ExampleStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name={Example1} 
        component={ExampleScreen} 
        headerShown={true} 
        options={{
                    headerTitle: "Example 1",
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
                    
                  }} />
      <Stack.Screen 
        name={Example2} 
        component={ExampleScreen} 
        headerShown={true}
        options={{
          headerTitle: "Example 2",
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