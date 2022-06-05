//IMPORTS
import React from 'react';
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import {Text, Image} from 'react-native';
import TeamScreen from '../../screens/TeamScreen';
import PdfScreen from '../../screens/PdfScreen';

const Stack = createNativeStackNavigator();

function TeamStack() {
    return (
        <Stack.Navigator>
                <Stack.Screen 
                  name="TeamHome" 
                  component={TeamScreen}
                  options={{
                    headerTitle: "Teams",
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
                <Stack.Screen 
                  name="PdfScreen" 
                  component={PdfScreen}
                  options={{
                    headerTitle: "Doc",
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
// Constants

const screens = {
  TeamHome: TeamScreen,
  PdfScreen :PdfScreen,
}

// TeamStack

const TeamStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null,
  }
  }
);
*/

export default TeamStack;