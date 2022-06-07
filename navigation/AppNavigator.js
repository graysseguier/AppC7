//IMPORTS
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';

// Custom Components :
/* 
import DrawerComponent from '../components/DrawerComponent';
import BarreMenu from '../components/BarreMenu';
*/

// On importe tous les stacks navigators : 1 par onglet
import BugStack from './TabStackNavigators/BugStack';
import ContactsStack from './TabStackNavigators/ContactsStack';
import MapStack from './TabStackNavigators/MapStack';
import ProgramStack from './TabStackNavigators/ProgramStack';
import ResultsStack from './TabStackNavigators/ResultsStack';
import TeamStack from './TabStackNavigators/TeamStack';
import SatisfactionStack from './TabStackNavigators/SatisfactionStack';
import StaffStack from './TabStackNavigators/StaffStack';


import PartnersScreen from '../screens/PartnersScreen';

// NAVIGATION :

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {

            if (route.name === 'Program') {
              return(
                <FontAwesome name="calendar" size={30} color={color} />
              );
            } else if (route.name === 'Results') {
              return(
                <FontAwesome name="trophy" size={30} color={color} />
              );
            } else if (route.name === 'Maps') {
              return(
                <FontAwesome name="map" size={30} color={color} />
              );
            }
          }
        })
        }
      >
        <Tab.Screen name="Program" component={ProgramStack} />
        <Tab.Screen name="Results" component={ResultsStack} />
        <Tab.Screen name="Maps" component={MapStack} />
      </Tab.Navigator>
  )
}

/*
// Bottom Tab Navigator (qui regroupe les onglets les plus utilisés - surtout ceux adressés au public)

const BottomTabNavigator = createBottomTabNavigator({
   
    Program: {
      screen: ProgramStack,
      name : "Accueil",
      navigationOptions: {
        tabBarLabel: 'Programme',
        tabBarIcon: ({ focused, color, size, tintColor}) => {return(
          <FontAwesome name="calendar" size={30} color={tintColor} />
        )},
      }
    },

    Results: {
      screen: ResultsStack,
      navigationOptions: {
        tabBarLabel: 'Results',
        tabBarIcon: ({tintColor}) => {return(
          <FontAwesome name="trophy" size={30} color={tintColor} />
        )},
      },
    },

    Map: {
      screen: MapStack,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({tintColor}) => {return(
          <FontAwesome name="map" size={30} color={tintColor} />
        )},
      },
    },
  },
  {
    tabBarOptions: { activeTintColor:'#549E5E'}
  }
);
*/

// A AJOUTER QUAND L'ONGLET INFO SER REMPlI

/*
  Infos: {
    screen: InfosStack,
    navigationOptions: {
      tabBarLabel: 'Latest',
      tabBarIcon: ({ focused, color, size, tintColor}) => {return(
        <FontAwesome
          name="info-circle"
          size={30}
          color={tintColor} />
      )},
    },
  },
*/

/*
// Mise ne place du Drawer Navigator

const screens = {
    Home : {
      screen: BottomTabNavigator,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Home'} iconName={'home'} type="AntDesign"/>
        )
      },
    },
    Teams : {
      screen: TeamStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Team Space'} iconName={'team'} type="AntDesign"/>
        )
      },
    },
    Contacts: {
      screen: ContactsStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor}  title={'Contacts'} iconName={'contacts'} type="AntDesign"/>
        )
      },
    },
    Staff :{
      screen: StaffStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Staff'} iconName={'idcard'} type="AntDesign" />
        )
      }
    },
    Partners :{
      screen: PartnersScreen,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Partners'} iconName={'handshake-o'} type="FontAwesome" />
        )
      }
    },
    Satisfaction :{
      screen: SatisfactionStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Satisfaction Form'} iconName={'like2'} type="AntDesign" />
        )
      }
    },
    Bug :{
      screen: BugStack,
      navigationOptions:{
        drawerLabel: ({backgroundColor, tintColor})=>(
          <BarreMenu color={tintColor} backgroundColor={backgroundColor} title={'Signaler un bug'} iconName={'tool'} type="AntDesign" />
        )
      }
    },
  };
*/

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Teams" component={TeamStack} />
        <Drawer.Screen name="Contacts" component={ContactsStack} />
        <Drawer.Screen name="Staff" component={StaffStack} />
        <Drawer.Screen name="Partners" component={PartnersScreen} />
        <Drawer.Screen name="Satisfaction" component={SatisfactionStack} />
        <Drawer.Screen name="Bug" component={BugStack} />
      </Drawer.Navigator>
  )
}

/*
const DrawerNavigator = createDrawerNavigator(
  screens,
  {
    contentComponent: DrawerComponent,
    drawerWidth: Dimensions.get('window').width*3/4,
    contentOptions:{
      activeTintColor:'#549e5e',
      activeBackgroundColor:'#ececec'
    }
  }

)
*/

// EXPORT :
export default function AppNavigator() {
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}

  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

