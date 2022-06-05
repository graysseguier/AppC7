// IMPORTS
import React from 'react';
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import {Text, Image} from 'react-native';
import SatisfactionScreen from '../../screens/SatisfactionScreen';

const Stack = createNativeStackNavigator();

function SatisfactionStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Satisfaction" 
            component={SatisfactionScreen} 
            headerShown={true}
            options={{
              headerTitle: "Satisfaction Form",
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
// Constants :

const screens = {
  Satisfaction: SatisfactionScreen,
};


// BugStack
const SatisfactionStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }}
);
*/

export default SatisfactionStack;