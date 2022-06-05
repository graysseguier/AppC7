//IMPORTS :
import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import CustomHeader from '../components/CustomHeader';

//COMPONENTS :
class SatisfactionScreen extends React.Component {

  render () {
    return(
        <View style={{flex:1}}>
                <WebView source={{uri:'https://docs.google.com/forms/d/e/1FAIpQLSeErML5SduFvhhZAWVPstjC8WytCnCKORrTBMbEr6w7bvQnYw/viewform?usp=sf_link'}} />
        </View>
        
    )
  }
}

//EXPORTS
export default SatisfactionScreen;