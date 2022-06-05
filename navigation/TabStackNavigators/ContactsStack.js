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
            name="Contacts" 
            component={ContactsScreen} 
            headerShown={true}
            options={{
              headerTitle: "Contacts",
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
