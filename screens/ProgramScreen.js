//IMPORTS
import React from 'react';
import {View, Text, Button} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';


function GoToButton({ screenName }) {
  const navigation = useNavigation();
  return (
    <Button
      title={`Go to ${P2}`}
      onPress={() => navigation.navigate(Program2)}
    />
  );
}
//COMPONENT :
class ProgramScreen extends React.Component {
  constructor(props){
    super(props)
    this.state=({
    masculin:true,donneesF:[],teamsF:[], teamsH:[], donneesH : [], loading:true
      })
  }
  render() {
    //console.log(this.props)
    return (
      <View style={{flex:1}}>

        <View style={{flex:1}} >
          <CustomHeader title="Program" isHome={true} navigation={this.props.navigation} style={{flex:1}} />
        </View>
        
        <View style={{flex:10}} >
          <Text>
            This page will contain the planning for the matchs (horaire, terrain, phase du tournois, en cours/ joué, résultat si joué, score live sinon)
          </Text>
          <Button onPress={() => this.props.navigation.navigate('Program2')}>
            <Text>Access sub layer of the program tab</Text>
          </Button>
        </View>
        
      </View>
    );
  }
}

//EXPORTS:
export default ProgramScreen;
