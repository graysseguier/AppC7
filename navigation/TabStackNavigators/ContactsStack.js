// IMPORTS
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import React from 'react';
import {Text, Image} from 'react-native';
import ContactsScreen from '../../screens/ContactsScreen';

const Stack = createNativeStackNavigator();

function ContactsStack() {
    return (
      <Stack.Navigator>
          <Stack.Screen 
            name="Emergency Contacts" 
            component={ContactsScreen}
            options={{
              headerShown: false
            }}  
          />
      </Stack.Navigator>
    )
}

/*
// Constants :

const screens = {
  Contacts: ContactsScreen,
};


// ContactsStack
const ContactsStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }
  }
);
*/

export default ContactsStack;
