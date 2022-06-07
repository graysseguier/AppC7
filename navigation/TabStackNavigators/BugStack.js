// IMPORTS
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import React from 'react';
import {Text, Image} from 'react-native';
import BugScreen from '../../screens/BugScreen';

const Stack = createNativeStackNavigator();

function BugStackScreen() {
    return (
        <Stack.Navigator>
                <Stack.Screen 
                  name="Bugstack" 
                  component={BugScreen} 
                  headerShown={true}
                  options={{
                    headerTitle: "Signaler un bug",
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
                    
                  }} 
                />
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