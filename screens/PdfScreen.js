//IMPORTS
import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import CustomHeader from '../components/CustomHeader';

//COMPONENTS
class PdfScreen extends React.Component {

  render () {
    const params = JSON.parse(JSON.stringify(this.props.navigation.state.params));

    return(
      <View style={{flex:1}}>
          
              <WebView source= {{uri : params.uri}} />
      </View>
    )
  }
}

//EXPORTS
export default PdfScreen;
