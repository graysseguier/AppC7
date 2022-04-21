//IMPORTS
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { ListItem } from 'react-native-elements'
import Match from '../components/Match';
import CustomHeader from '../components/CustomHeader';
import {ActivityIndicator, SafeAreaView, Button} from "react-native" // SafeAreaView --> USEFUL FOR IPhone X and new phones designs !
import { MonoText } from '../components/StyledText';
import * as firebase from 'firebase'
import 'firebase/firestore';
import { connect } from 'react-redux'

// CONSTANTS :


//COMPONENT :


class ResultsScreen extends React.Component {

  constructor(props){
    super(props)
    this.mybool==true
    this.state=({
      masculin:true,
      donneesF : [],
      donneesH : [],
      matchsF : undefined,
      matchsH : [],
      loading : true})
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
    this.setState({
      loading : true
    })
  }
  

  
  _loadDataF(){
    this.setState({donneesF:[]},()=>{
        var that=this
        
        var db = firebase.firestore();
    
        var docRef = db.collection("Matchs").doc("Femmes").collection("Femmes")
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
    
        var docRef = db.collection("Matchs").doc("Hommes").collection("Hommes")
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
        
    var listeMatchsF=this.state.donneesF
    longueur=listeMatchsF.length
    
    var matchsF=[]

    
    for (i=0;i<longueur;i++){
        
        var match=listeMatchsF[i]
        var matchName={name : match.Name}
        var enCours = {enCours : match.enCours}
        var date = {date : match.Date}
        var equipe1 = {equipe1 : match.Equipe1}
        var equipe2 = {equipe2 : match.Equipe2}
        var afficher = {afficher : match.Afficher}
        var score1 = {score1 : match.Score1}
        var score2 = {score2 : match.Score2}
        var lieu = {lieu : match.Lieu}
        var image1 = {image1 : match.Image1}
        var image2 = {image2 : match.Image2}
        matchsF.push({matchName,enCours, date, score1,score2,lieu, equipe1, equipe2, afficher, image1, image2})
        
    }
    //matchsF = {matchName}
    
    this.setState({matchsF : matchsF})
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
        return({flex:1,backgroundColor:this.colorTab(), marginLeft:10,marginRight:5,marginVertical:8,borderWidth:1,borderColor:this.colorTab(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
      }
    }
    else{
      if (this.state.masculin){
        return({flex:1,backgroundColor:this.colorTab(), marginLeft:5,marginRight:10,marginVertical:8,borderWidth:1,borderColor:this.colorTab(),borderRadius:5,justifyContent:'center',alignItems:'center', flexGrow : 1})
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
  
  test(){
    if (this.mybool==true) {this.forceUpdate()}
  }
  changeMasculin1(){
    this.setState({masculin:true})
  }
  changeMasculin2(){
    this.setState({masculin:false})
  }
  refreshPage() {
    window.location.reload(true);
  }
  displayVue(){
    if (this.state.masculin){
      return(

        <ScrollView >
        <View>
        <Button onPress= {()=>this._loadDataF()} title="Refresh" color = {this.colorTab()}
        borderColor={this.colorBord()} borderRadius="5" >  </Button>
        </View>
          <Match id1 = {1}
                id2 = {2}
                score1 = {18}
                score2 = {12}
          />
        </ScrollView>
      )
    }
    else{
      return(
        <ScrollView>
        <View>
        <Button onPress= {()=>this._loadDataF()} title="Refresh" color = {this.colorTab()}
        borderColor={this.colorBord()} borderRadius="5" >  </Button>
        </View>
          {
              this.state.matchsF.map((item, i) => (
          <Match 
          match={item}
          key={i}    
          />
              ))}
        </ScrollView>
      )
    }
  }

  render() {
    //const finale = matchsF[0]
    //console.log(this.state.matchsF)
    //var db = firebase.firestore();
    //console.log(firebase.firestore.getCollections())
    if (this.state.matchsF != undefined){
    return (

      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <CustomHeader title="Match Results" isHome={true} navigation={this.props.navigation} />
        </View>
        <View style={{flex:1, flexDirection:'row',height:50, margin : 5}}>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin1()} style={this.styleBox('masculin')}>
            <Text style={this.styleText('masculin')}>MASCULIN</Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin2()} style={this.styleBox('feminin')} >
            <Text style={this.styleText('feminin')}>FEMININ</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:10}}>

          {this.displayVue()}

        </View>

      </View>

    )}
    else {
      return(
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <CustomHeader title="Match Results" isHome={true} navigation={this.props.navigation} />

        </View>
        <View style={{flex:1, flexDirection:'row',height:50, margin : 5}}>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin1()} style={this.styleBox('masculin')}>
            <Text style={this.styleText('masculin')}>MASCULIN</Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>this.changeMasculin2()} style={this.styleBox('feminin')} >
            <Text style={this.styleText('feminin')}>FEMININ</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:10}}>
        {this._displayLoading()}
        <View>
        <Button onPress= {()=>this._loadDataF()} title="Refresh" color = {this.colorTab()}
        borderColor={this.colorBord()} borderRadius="5" >  </Button>
        </View>
        </View>

      </View>)

    }
  }
}

// Styles :
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
    height:40,
    backgroundColor:'#6ce17b',
    justifyContent:'center',

    alignItems:'center',
  },
  titleText: {
    fontSize: 35,
    marginVertical: 100,
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
  },
  
  
});

//EXPORTS
export default ResultsScreen;
