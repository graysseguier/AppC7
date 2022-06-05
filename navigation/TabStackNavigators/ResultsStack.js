// IMPORTS :
import React from 'react';
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import {Text, Image} from 'react-native';
import ResultsScreen from '../../screens/ResultsScreen';

const Stack = createNativeStackNavigator();

function ResultsStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Results" 
            component={ResultsScreen} 
            headerShown={true}
            options={{
              headerTitle: "Results",
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