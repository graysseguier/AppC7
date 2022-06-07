import 'react-native-gesture-handler'; // nothing above this import

//IMPORTS

import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React from 'react';
import {StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';


// COMPONENT
class App extends React.Component{

  constructor(props) {
    super(props);
    //State initializing
    this.state = {
      isLoadingComplete: false,
    };

    // Constants
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    });

    //Binding des fonctions
    this.loadResourcesAsync = this.loadResourcesAsync.bind(this);
    this.handleLoadingError = this.handleLoadingError.bind(this);
    this.handleFinishLoading = this.handleFinishLoading.bind(this);
  }

  async loadResourcesAsync() {
    await Promise.all([

      Asset.loadAsync([
        require('./assets/images/icon.png'),
        require('./assets/images/centrale-7.png'),
      ]),

      Font.loadAsync({
        // This is the font that we are using for our tab bar
        Roboto: require('./assets/fonts/Roboto/Roboto-Black.ttf'),
        Roboto_medium: require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
        ...Ionicons.font,
      }),
    ]);
  }

  handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  }

  handleFinishLoading() {
    this.setState({isLoadingComplete: true});
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <AppNavigator />
      );
    }
  }
}

//EXPORT
export default App;

