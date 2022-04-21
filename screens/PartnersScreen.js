//IMPORTS

import React from 'react';
import {View,TouchableOpacity,Dimensions,Image,ScrollView,Linking, Text} from 'react-native';

import CustomHeader from '../components/CustomHeader';

//CONSTANTS :
const {width, height} = Dimensions.get('window');

//COMPONENT
class PartnersScreen extends React.Component {

  render() {
    return(
      <View style={{flex:1}}>
            <View style={{flex:1}}>
                <CustomHeader title="Partners" isHome={true} navigation={this.props.navigation} />
            </View>
        
            <View style={{flex:11}}>
                <ScrollView style={{}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.hsbc.com/')}} style={{flex:1, resizeMode: 'cover', width:width, height:width*1088/1636, borderBottomWidth:2, borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/hsbc.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.capgemini.com/')}} style={{flex:1, resizeMode: 'cover', width:width, height:width*988/3815, borderBottomWidth:2, borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/capgemini.png')}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.antalis.com/')}} style={{flex:1, resizeMode: 'cover', width:width, height:width, borderBottomWidth:2, borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/antalis.png')}/>
                    </TouchableOpacity>                                   
                </ScrollView>
            </View>
      </View>
    )
  }
}

export default PartnersScreen;