// IMPORTS :

import React from 'react';
import { Text, Dimensions} from 'react-native';
import { Right, Left, Icon, CardItem} from 'native-base';
import { AntDesign, FontAwesome} from '@expo/vector-icons';


// Component

export default class BarreMenu extends React.Component {

/*
Props include :
- type : type of icon
- logo : name of the icon chosen
- color : couleur dans laquelle afficher le label (active tint ou pas)
- title : title of the label 

*/

  createIcon(type,iconName,couleur,titre){
    if (type==="AntDesign"){
      return(
        <AntDesign name={iconName} size={27} style={{marginRight:10, color:couleur}} />
      )
    }
    if (type==="FontAwesome"){
      return(
        <FontAwesome name={iconName} size={27} style={{marginRight:10, color:couleur}} />
      )
    }
    else {
      return(<Text>icon undefined</Text>)
    }
  }

  render(){

    return(
      <CardItem style={{
        width: Dimensions.get('window').width*3/4,
        backgroundColor: this.props.backgroundColor
        }} >
              <Left>
                {this.createIcon(this.props.type,this.props.iconName,this.props.color,this.props.title)}
                <Text style={{fontWeight:'bold',color:this.props.color}}>{this.props.title}</Text>
              </Left> 
              <Right>
                <Icon active  style={{color:this.props.color}} name="arrow-forward" />
              </Right>
      </CardItem>
    )
  }
}
