//IMPORTS
import React from 'react';
import {View, Text} from 'native-base';

import CustomHeader from '../components/CustomHeader';


//COMPONENT :
class Program2 extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>

        <View style={{flex:1}}>
          <CustomHeader title="Program sub screen" isHome={false} navigation={this.props.navigation} />
        </View>

        <View style={{flex:10}}>
          <Text>
            SUB LAYER !!
          </Text>  
        </View>

      </View>
    );
  }
}

//EXPORTS:
export default Program2;
