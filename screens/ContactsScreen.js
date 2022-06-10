// IMPORTS :
import React from 'react';
import { Text, View,TouchableOpacity,Dimensions,Image,ScrollView,Linking,Animated, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

//CONSTANTS :
const {width,height}=Dimensions.get('window');

// COMPONENT :
class ContactsScreen extends React.Component {

  constructor(props){
    super(props)
    this.state={topPosition:new Animated.Value(height)}
  }

  static navigationOptions={
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Contacts'} logo={'phone'}/>
    )
  }

  launchAnimation(){
    Animated.timing(
      this.state.topPosition,
      {
          toValue:height-100,
          duration:500
      }
  ).start()


  setTimeout(() => {
    Animated.timing(
      this.state.topPosition,
      {
          toValue:height,
          duration:500
      }
  ).start()
    }, 2000);
  }

  pressNumero(num){
    Clipboard.setString(num)
    this.launchAnimation()
  }

  render() {
    return(
      <View style={{flex:1}}>

        <View style={{flex:1}}>
            <ScrollView style={{ flex: 1}}>
            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 7 81 78 16 32')}} style={styles.container}>
                        <Text style={styles.title}>INFOS NAVETTES</Text>
                        <Text style={styles.content}>07 81 78 16 32</Text>
            </TouchableOpacity>

            <View  style={styles.container}>
                        <Text style={styles.title}>NUMEROS D'URGENCE</Text>
            </View>

            <View style={styles.gap}></View>

            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 6 30 90 04 08')}}  style={styles.text_container}>
                        <Text style={styles.text} >THOMAS JACOBE DE HAUT DE SIGY  //  Président de l'Association</Text>
                        <Text style={styles.text} >06 30 90 04 08</Text>
            </TouchableOpacity>

            <View style={styles.gap}></View>

            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 7 83 42 98 41')}} style={styles.text_container}>
                        <Text style={styles.text} >CLEMENT VIGNON  //  Responsable sécurité et premiers secours</Text>
                        <Text style={styles.text} >07 83 42 98 41</Text>
            </TouchableOpacity>

            <View style={styles.gap}></View>

            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 6 51 64 26 70')}}  style={styles.text_container}>
                        <Text style={styles.text} >ERWAN DUBOURG  //  Directeur opérationnel</Text>
                        <Text style={styles.text} >06 51 64 26 70</Text>
            </TouchableOpacity>

            <View style={styles.gap}></View>

            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 6 17 56 51 27')}} style={styles.text_container}>
            <Text style={styles.text} >ANTOINE MARANGE  //  Directeur opérationnel</Text>
                        <Text style={styles.text} >06 17 56 51 27</Text>
            </TouchableOpacity>

            <View style={styles.gap}></View>

            <View style={styles.container}>
              <Text style={styles.title} >SUIVEZ NOUS SUR LES RESEAUX !</Text>
            </View>
            
            <View style={{flex: 1,flexDirection:'column'}}>

                <View style={{flexDirection:'row',flex:1}}>

                    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/centrale.seven/')}} style={{flex:1}}>
                        <Image style={{margin:5,height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../assets/images/ImagesContacts/8.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.instagram.com/centralesevens/')}} style={{flex:1}}>
                      <Image style={{margin:5,height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../assets/images/ImagesContacts/9.png')}/>
                    </TouchableOpacity>
                
                </View>
                
                <View style={{flexDirection:'row',flex:1}}>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://twitter.com/CentraleSeven')}} style={{flex:1}}>
                    <Image style={{margin:5,height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../assets/images/ImagesContacts/10.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/user/CentraleSeven')}} style={{flex:1}}>
                    <Image style={{margin:5,height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../assets/images/ImagesContacts/11.png')}/>
                    </TouchableOpacity>
                </View>
            </View>





            </ScrollView>
          </View>
        </View>
    )
  }
}

//STYLES
const styles = StyleSheet.create({
  container: {
    flex: 4, 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    fontStyle: 'italic',
    fontSize: 30,
    fontWeight: '100',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center'
  },
  content: {
    flex: 1,
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  gap: {
    flex: 1,
    backgroundColor: '#dfdfdf'
  },
  text_container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

/* <ScrollView style={{}}>


                </ScrollView> */

/* <View style={{flex:1}}>
                <View style={{height:50,justifyContent:'center',alignItems:'center'}}>
                    <Text>EN CAS D'URGENCE CONTACTEZ :</Text>
                </View>
                <View style={{height:50,flexDirection:'column'}}>
                    <View style={{marginHorizontal:5,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20}}>BASILE MERCIER - Responsable sécurité et premiers secours</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18}}>+33 6 35 45 42 53</Text>
                    </View>
                </View>
          </View> */

// EXPORT :

export default ContactsScreen;

/*
<View style={{flex:1}}>

        <View style={{flex:1}}>
            <ScrollView style={{marginTop:10}}>
            <TouchableOpacity onPress={()=>{ this.pressNumero('06 13 88 90 67')}} style={{width:width,height:0.27*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/ImagesContacts/1.png')}/>
            </TouchableOpacity>
            <View  style={{width:width,height:0.182*width}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/ImagesContacts/2.png')}/>
            </View>
            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 6 84 19 91 76')}}  style={{width:width,height:0.131*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/ImagesContacts/3.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 6 73 40 59 74')}} style={{width:width,height:0.131*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/ImagesContacts/4.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 7 83 40 75 60')}}  style={{width:width,height:0.131*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/ImagesContacts/5.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ this.pressNumero('+33 6 67 34 25 72')}} style={{width:width,height:0.131*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/ImagesContacts/6.png')}/>
            </TouchableOpacity>
            <View  style={{width:width,height:0.26*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../assets/images/ImagesContacts/7.png')}/>
            </View>
            <View style={{height:100,flexDirection:'column'}}>
                <View style={{flexDirection:'row',flex:1}}>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/centrale.seven/')}} style={{flex:1}}>
                        <Image style={{margin:5,height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../assets/images/ImagesContacts/8.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.instagram.com/centralesevens/')}} style={{flex:1}}>
                    <Image style={{margin:5,height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../assets/images/ImagesContacts/9.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://twitter.com/CentraleSeven')}} style={{flex:1}}>
                    <Image style={{margin:5,height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../assets/images/ImagesContacts/10.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/user/CentraleSeven')}} style={{flex:1}}>
                    <Image style={{margin:5,height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../assets/images/ImagesContacts/11.png')}/>
                    </TouchableOpacity>
                </View>
            </View>





            </ScrollView>
        </View>
        <Animated.View style={{position:'absolute',height:50,top:this.state.topPosition,width:width,justifyContent:'center',alignItems:'center',backgroundColor:'#dfdfdf'}}>
            <Text style={{fontWeight:'bold',fontSize:18}}>Numéro copié</Text>
        </Animated.View>

        </View>
*/