// IMPORTS
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactsScreen from '../../screens/ContactsScreen';

const Stack = createNativeStackNavigator();

function ContactsStack() {
    return (
      <Stack.Navigator>
          <Stack.Screen name="Contacts" component={ContactsScreen} headerShown={false} />
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
