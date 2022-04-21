//IMPORTS
import React from 'react';
import {Text, View} from 'native-base';

import CustomHeader from '../components/CustomHeader';

//COMPONENTS
class InfosScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <CustomHeader title="Infos" isHome={true} navigation={this.props.navigation} />
      </View>
      <View style={{flex:10}}>
        <Text>
            This page will display the most recent posts and informations from the Centrale 7's
        </Text> 
      </View>     
    </View>
    )
  }
}

//EXPORTS
export default InfosScreen;