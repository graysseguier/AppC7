//IMPORTS
import React from 'react';
import {Text, View} from 'native-base';

import CustomHeader from '../components/CustomHeader';

//COMPONENTS
class InfosScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        
        <Text>
            This page will display the most recent posts and informations from the Centrale 7's
        </Text>      
    </View>
    )
  }
}

//EXPORTS
export default InfosScreen;