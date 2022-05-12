//IMPORTS :

import React from 'react';
import {Image, TouchableOpacity, Button, View} from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title, NativeBaseProvider} from 'native-base';


//COMPONENTS :

class CustomHeader extends React.Component {

  render() {

    //description des props:
    // le titre : nom de l'onglet - this.props.title
    // un booléen isHome qui indique si on est dans la page d'acueil de l'onglet (true) ou bien si l'on est plus profond dans le stack navigator - this.props.isHome
    // this.props.navigation

    //StatusBar.setBarStyle("light-content");
    //StatusBar.setTranslucent(true);
    //console.log(this.props.navigation)
    return (

        <NativeBaseProvider>

        <Container>

            <Header style={{ height: 60, backgroundColor:'#549E5E'}} androidStatusBarColor='#549E5E' >
                <View>
                <Left>
                        
                        <Button title='B1' onPress={()=> this.props.navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>:
                        <Button title='B2' onPress={()=> this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    
                </Left>
                </View>

                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>

                <Right>
                    
                    <Image source={require('../assets/images/icon.png')} style={{height:40, width:40, resizeMode: 'contain', tintColor: 'white'}} />
                </Right>
                </TouchableOpacity>

            </Header>
        </Container>

        </NativeBaseProvider>
    );
  }
}

export default CustomHeader;