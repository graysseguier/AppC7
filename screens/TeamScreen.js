// IPMORTS
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import * as firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import AffichageEquipe from "../components/AffichageEquipe";

import CustomHeader from '../components/CustomHeader';

// CONSTANTS :



// COMPONENT :

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

  

class TeamScreen extends React.Component {


  constructor(props){
    super(props)
    this.state=({
    masculin:true,donneesF:[],teamsF:[], teamsH:[], donneesH : [], loading:true
      })
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

// Chargement des données
  componentDidMount(){
    this._loadDataF()
    this._loadDataH()
    this.setState({
      loading : true
    })
  }

  
  _loadDataF(){
    this.setState({donneesF:[]},()=>{
        var that=this
        
        var db = firebase.firestore();
    
        var docRef = db.collection("Equipes").doc("Femmes").collection("Femmes")
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({donneesF:that.state.donneesF.concat(match)})
                
                
            });
        })
        .then(()=>this.loadTeamsF())
        .catch(function(error) {
            console.log("Error getting document:", error);
        })
        .then(()=>this.setState({loading:false}))
        
    }
    )
  }
  _loadDataH(){
    this.setState({donneesH:[]},()=>{
        var that=this
        
        var db = firebase.firestore();
    
        var docRef = db.collection("Equipes").doc("Hommes").collection("Hommes")
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({donneesH:that.state.donneesH.concat(match)})
                
                
            });
        })
        .then(()=>this.loadTeamsH())
        .catch(function(error) {
            console.log("Error getting document:", error);
        })
        .then(()=>this.setState({loading:false}))
        
    }
    )
  }

  loadTeamsF(){
        
    var listeTeamsF=this.state.donneesF
    longueur=listeTeamsF.length
    
    var teamsF=[]

    
    for (i=0;i<longueur;i++){
        
        var team=listeTeamsF[i]
        var teamName={name : team.Name}
        var image = {image : team.image}
        var texte = {texte : team.texte}
        teamsF.push({teamName,image, texte})
        
    }
    
    this.setState({teamsF:teamsF})
  }
  loadTeamsH(){
        
    var listeTeamsH=this.state.donneesH
    longueur=listeTeamsH.length
    
    var teamsH=[]

    
    for (i=0;i<longueur;i++){
        
        var team=listeTeamsH[i]
        var teamName={name : team.Name}
        var image = {image : team.image}
        var texte = {texte : team.texte}
         
        teamsH.push({teamName,image, texte})
        
    }
    
    this.setState({teamsH:teamsH})
  }

  colorTab(){
    return('#549E5E')
  }
  colorBord(){
    return('#202421')
  }

  styleBox(genre){
    if (genre==='masculin'){
      if (this.state.masculin){
        return({flex:1,backgroundColor:'white',marginLeft:10,marginRight:5,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
      }
      else{
        return({flex:1,backgroundColor:this.colorTab(), marginLeft:10,marginRight:5,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
      }
    }
    else{
      if (this.state.masculin){
        return({flex:1,backgroundColor:this.colorTab(), marginLeft:5,marginRight:10,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center',flexGrow : 1})
      }
      else{
        return({flex:1,backgroundColor:'white',marginLeft:5,marginRight:10,marginVertical:8,borderWidth:1,borderColor:this.colorBord(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
      }
    }
  }

  styleText(genre){
    if (genre==='masculin'){
      if(this.state.masculin){
        return({color:this.colorTab(), fontWeight:'bold'})
      }
      else{
      return({color:'white', fontWeight:'bold'})
      }
    }
    else{
      if (this.state.masculin){
        return({color:'white', fontWeight:'bold'})
      }
      else{
        return({color:this.colorTab(), fontWeight:'bold'})
      }
    }
  }

  changeMasculin1(){
    this.setState({masculin:true})
  }
  changeMasculin2(){
    this.setState({masculin:false})
  }
  
  displayVue(){  
    
    if (this.state.masculin){
      return(
        <ScrollView 
        
        >
        {
          this.state.teamsH.map((item, i) => (
           
            <AffichageEquipe
              team={item}
              
              key={i}
              //title={item.name}
              bottomDivider
              chevron
              masculin = {true}
              
            />
          ))
        }

    </ScrollView>
      )
    }
    else{
      
      return(
      
        <ScrollView>
          
            {
              this.state.teamsF.map((item, i) => (
               
                <AffichageEquipe
                  team={item}
                  
                  key={i}
                  //title={item.name}
                  bottomDivider
                  chevron
                  masculin = {false}
                  
                />
              ))
            }

        </ScrollView>
      )
    }
  }


  render() {
    //console.log(this.props)
    return (
      
      
      <View style={{flex:1}}>
          
        <View style={{flex:1}}>
          <CustomHeader title="Teams" isHome={true} navigation={this.props.navigation} />
          
        </View>

        <View style={{flex:1, flexDirection:'row',height:50, margin : 5}}>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin1()} style={this.styleBox('masculin')}>
            <Text style={this.styleText('masculin')}>MEN</Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin2()} style={this.styleBox('feminin')} >
            <Text style={this.styleText('feminin')}>WOMEN</Text>
          </TouchableOpacity>
          
          </View>
        </View>


        <View style={{flex:11}}>
          {this._displayLoading()}
          {this.displayVue()}
          
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
  corr : {
    flexGrow : 1
  },
  image: {
    height: 169,
    margin: 5
  },
  bouton : {
    height: 169,
    margin: 5
  }
});

// EXPORT :
export default TeamScreen;
