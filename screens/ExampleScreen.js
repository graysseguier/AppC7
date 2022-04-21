//IMPORTS :
import React from 'react';
import {View,Text} from 'react-native';
import CustomHeader from '../components/CustomHeader';

//COMPONENTS :
class ExampleScreen extends React.Component {

  render () {
    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <CustomHeader title="Example" isHome={true} navigation={this.props.navigation} />
            </View>
            <View style={{flex:11}}>
                <Text>Le contenu de l'onglet ici</Text> 
            </View>
        </View>
        
    )
  }
}

//EXPORTS
export default ExampleScreen;