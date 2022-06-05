//IMPORTS :
import React from 'react';
import {View,Text} from 'react-native';
import CustomHeader from '../components/CustomHeader';

//COMPONENTS :
class ExampleScreen extends React.Component {

  render () {
    return(
        <View style={{flex:1}}>
                <Text>Le contenu de l'onglet ici</Text> 
        </View>
        
    )
  }
}

//EXPORTS
export default ExampleScreen;