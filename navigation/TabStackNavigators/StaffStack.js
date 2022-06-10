//IMPORTS
import React from 'react';
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import {Text, Image} from 'react-native';
import StaffScreen from '../../screens/StaffScreen';
import PdfScreen from '../../screens/PdfScreen';

const Stack = createNativeStackNavigator();

function StaffStack() {
    return (
        <Stack.Navigator>
                <Stack.Screen 
                  name="StaffHome" 
                  component={StaffScreen} 
                  headerShown={true}
                  options={{
                    headerTitle: "Espace Staffeurs",
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
                  name ="PdfScreen" 
                  component={PdfScreen} 
                  headerShown={true}
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
                    
                  }} 
                   />
        </Stack.Navigator>
    )
}

/*
// Constants

const screens = {
  StaffHome: StaffScreen,
  PdfScreen: PdfScreen,
}

// StaffStack

const StaffStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
      header: null,
    }
  }
);
*/

export default StaffStack;