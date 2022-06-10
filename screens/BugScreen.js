//IMPORTS :
import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

//COMPONENTS :
class BugScreen extends React.Component {

  render () {
    return(
        <View style={{flex:1}}>
                <WebView source={{uri:'https://docs.google.com/forms/d/e/1FAIpQLScGUKMj5jPWLHVBYZDilwLR-j6jEzOQLsXTGt8kecuz4W6lsA/viewform?usp=sf_link'}} />
        </View>
        
    )
  }
}

//EXPORTS
export default BugScreen;

