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
            <View style={{flex:1}}>
                <CustomHeader title="Satisfaction Form" isHome={true} navigation={this.props.navigation} />
            </View>
            <View style={{flex:11}}>
                <WebView source={{uri:'https://docs.google.com/forms/d/e/1FAIpQLSeErML5SduFvhhZAWVPstjC8WytCnCKORrTBMbEr6w7bvQnYw/viewform?usp=sf_link'}} />
            </View>
        </View>
        
    )
  }
}

//EXPORTS
export default SatisfactionScreen;