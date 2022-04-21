//IMPORTS

import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { Icon } from 'native-base';
import {SearchBar} from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
import * as firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';






//COMPONENT :

class StaffScreen extends React.Component {
  
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props),
    this.state = {
      valueSearch:'',
      listeStaffeursRecherches:[],
      onResearch:false,
      recherchesRecentes:['','',''],
      staffeurs : [],
      loading : true
    };
  }
  _displayLoading() {
    if (this.state.loading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
  componentDidMount(){
    this._loadDataStaffeur()
    this.setState({
      loading : true,
      
    })
  }
  
  

  
  _loadDataStaffeur(){
    this.setState({staffeurs:[]},()=>{
        var that=this
        
        var db = firebase.firestore();
    
        var docRef = db.collection("Staffeurs")
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({staffeurs:that.state.staffeurs.concat(match)})
                
                
            });
        })
        .then(()=>this.loadStaffeurs())
        .catch(function(error) {
            console.log("Error getting document:", error);
        })
        .then(()=>this.setState({loading:false}))
        
    }
    )
  }
  loadStaffeurs(){
        
    var liste_staffeurs=this.state.staffeurs
    longueur=liste_staffeurs.length
    
    var staffeurs=[]

    
    for (i=0;i<longueur;i++){
        
        var staffeur_courant=liste_staffeurs[i]
        //var name={staffeur : staffeur_courant.Name}
        
        staffeurs.push({staffeur : staffeur_courant.Name,icon : staffeur_courant.icon, idStaffeur : staffeur_courant.idStaffeur})
        //staffeurs.push({icon : staffeur_courant.icon})
        
    }
    //matchsF = {matchName}
    
    this.setState({staffeurs : staffeurs})
  }
  

  triDonnes(){
    var text=this.state.valueSearch.toUpperCase()
    var staffeurNom = ""
    var tableau = this.state.staffeurs.filter(function(staffeur){
      staffeurNom=staffeur.staffeur.toUpperCase()
      return((staffeurNom.indexOf(text)!=-1)&&(staffeurNom!='NOM'))})
    this.setState({listeStaffeursRecherches:tableau})
  }

  changeText(text){
    if (text.length==0){
      this.setState({onResearch:false})
    }
    else{
      this.setState({valueSearch:text,onResearch:true},()=>this.triDonnes())
    }
  }

  pressStaffeur(staffeur,idStaffeur){
    var title = "Staffeur"
    this.props.navigation.navigate("PdfScreen", {
      title:title,
      uri:'https://drive.google.com/file/d/1XYgcKsoA5POTLL91uOzy_bJPt8H0Wwfp/view?usp=sharing',
    });

  }

  displayStaffeurs(){

    if (this.state.onResearch){
      return(
        <View>
            <FlatList
              data={this.state.listeStaffeursRecherches}
              keyExtractor={(item)=>item.staffeur.toString()}
              renderItem={({item})=>
              <TouchableOpacity style={{height:50,justifyContent:'center'}}
              onPress={()=>this.pressStaffeur(item.staffeur,item.idStaffeur)}>
                <View style={{height:50,marginLeft:10,borderColor:'#d6d6d6',borderBottomWidth:0.8,justifyContent:'center',flexDirection:'row'}}>
                  <View style={{flex:8,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{item.staffeur}</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon style={{fontSize:20}} name={item.icon}/>
                  </View>
                </View>
              </TouchableOpacity>
            }
            />
        </View>

      )
    }

    if ((!this.state.onResearch)&&!((this.state.recherchesRecentes[0].length>0)||(this.state.recherchesRecentes[1].length>0)||(this.state.recherchesRecentes[2].length>0))){
      if (this.state.valueSearch != '') {this.setState({valueSearch : '', listeStaffeursRecherches:[],onResearch:false})}
      if (this.state.staffeurs != []){

      return(
        <View>
            <FlatList
              data={this.state.staffeurs}
              keyExtractor={(item)=>item.idStaffeur}
              renderItem={({item})=>
              <TouchableOpacity style={{height:50,justifyContent:'center'}}
              onPress={()=>this.pressStaffeur(item.staffeur,item.idStaffeur)}>
                <View style={{height:50,marginLeft:10,borderColor:'#d6d6d6',borderBottomWidth:0.8,justifyContent:'center',flexDirection:'row'}}>
                  <View style={{flex:8,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{item.staffeur}</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon style={{fontSize:20}} name = {item.icon}/>
                  </View>
                </View>
              </TouchableOpacity>
            }
            />
        </View>

      )}
      else {
        return(
          <View>
            
              {this._displayLoading}
            
        </View>
        )
      }


    }
  }


  render() {
    
    const {search} = this.state;
    return (
      <View style={{flex:1}}>
        
        <View style={{flex:1}}>
          <CustomHeader title="Espace Staffeurs" isHome={true} navigation={this.props.navigation}/>
        </View>

        <View style={{flex:10}} >

          <SearchBar
            placeholder='Rechercher'
            onClearText={()=>
          this.setState({onResearch:false,valueSearch:''})}
            onChangeText={(text)=>this.changeText(text)}
            value={this.state.valueSearch}
            lightTheme = {true}
            inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: '#e5e5e5'}}/>

          <ScrollView>
          {this.displayStaffeurs()}
          </ScrollView>

        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  teamScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  pdf: {
    flex:1
  },
  titleView: {
    height:50,
    backgroundColor:'darkgreen',
    justifyContent:'center',
    alignItems:'center',
  },
  titleText: {
    fontSize: 35,
    color:'white'
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

//EXPORTS :
export default StaffScreen;
