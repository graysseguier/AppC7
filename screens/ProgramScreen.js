//IMPORTS
import React from 'react';
import {View, Text, Button} from 'react-native';



//COMPONENT :
class ProgramScreen extends React.Component {
  constructor(props){
    super(props)
    this.state=({
    masculin:true,donneesF:[],teamsF:[], teamsH:[], donneesH : [], loading:true
      })
  }

  render() {
    return (
      <View style={{flex:1}}>

        
          <Text>
            This page will contain the planning for the matchs (horaire, terrain, phase du tournois, en cours/ joué, résultat si joué, score live sinon)
          </Text>
          <Button title="Access sub layer of the program tab" onPress={() => this.props.navigation.navigate("Program2", {}) }>
          </Button>
        
      </View>
    );
  }
}

//EXPORTS:
export default ProgramScreen;
