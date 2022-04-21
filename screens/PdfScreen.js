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
          <View style={{flex:1}}>
              <CustomHeader title={params.title} isHome={false} navigation={this.props.navigation} />
          </View>
          <View style={{flex:11}}>
              <WebView source= {{uri : params.uri}} />
          </View>
      </View>
    )
  }
}

//EXPORTS
export default PdfScreen;
