// IMPORTS
import React from 'react';
import { Text, View,TouchableOpacity, Dimensions,Animated,Keyboard} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {Markers} from '../assets/data/Markers';

// CONSTANTS :


const campusGifRegion={latitude:48.709743,longitude:2.162944,latitudeDelta:0.012,longitudeDelta:0.012}
const OrsayStadiumRegion={latitude:48.70228409872657,longitude: 2.207069375731051,latitudeDelta:0.006,longitudeDelta:0.006}
const tournamentRegion={latitude: 48.69663152188838, longitude:2.1923827170479386,latitudeDelta: 0.09,longitudeDelta:0.09}

const {width,height}=Dimensions.get('window')



// COMPONENT
class MapScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      topPosition: new Animated.Value(height-450),
      recherche:'',
      listeMarkers:Markers['CS'],
      campus:'CS',
      region: campusGifRegion
    };
  }

  closeSearch() {
    Animated.timing(
      this.state.topPosition,
      {
          toValue: height*0.777,
          duration:300,
          useNativeDriver: false
      }
    ).start();
  }
  

  pressMap(){
    Keyboard.dismiss();
    this.closeSearch()
  }

  focusRegion(region){
    this.mapview.animateToRegion(region,1000)
  }

  changeCampus(nom){
    this.setState({campus:nom, listeMarkers: Markers[nom]})
    switch(nom){
      case 'CS':
        this.focusRegion(campusGifRegion)
        break
      case 'all':
        this.focusRegion(tournamentRegion)
        break
      case 'Orsay':
        this.focusRegion(OrsayStadiumRegion)
    }
  }

  render() {
    
    return(



        <View style={{flex:1}}>

          <View style={{flex: 1, flexDirection:'row', backgroundColor:'white', zIndex:1, opacity:0.8}}>

            <TouchableOpacity 
            onPress={()=>this.changeCampus('CS')}
            style={this.state.campus==='CS' ?
            {flex:1, justifyContent:'center', alignItems:'center', borderBottomWidth:3, borderBottomColor:'#070027'}:
            {flex:1, justifyContent:'center', alignItems:'center'}}
            >
              <Text style={this.state.campus==='CS'?{fontWeight:'bold'}:{opacity:0.7}}>
                Campus CS
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>this.changeCampus('Orsay')}
            style={this.state.campus==='Orsay' ?
            {flex:1,justifyContent:'center' , alignItems:'center', borderBottomWidth:3, borderBottomColor:'#070027'}:
            {flex:1,justifyContent:'center',alignItems:'center'}}
            >
              <Text style={this.state.campus==='Orsay'?{fontWeight:'bold'}:{opacity:0.7}}>
                Orsay Stadium
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>this.changeCampus('all')}
            style={this.state.campus==='all' ?
            {flex:1, justifyContent:'center', alignItems:'center', borderBottomWidth:3, borderBottomColor:'#070027'}:
            {flex:1, justifyContent:'center', alignItems:'center'}}
            >
              <Text style={this.state.campus==='all'?{fontWeight:'bold'}:{opacity:0.7}}>
                Overview
              </Text>
            </TouchableOpacity>

          </View>

          <MapView
            ref={mapview => this.mapview = mapview}
            mapType="satellite"
            showsUserLocation
            showsCompass={true}
            customMapStyle={mapStyle}
            provider={undefined}
            style={{ flex: 7}}
            initialRegion={campusGifRegion}
            onPress={()=>this.pressMap()}
          >
            {this.state.listeMarkers.map( marker => (
              <Marker
                key={marker.id}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              />
            ))} 
          </MapView>

        </View>     
    )
  }

}

//MAPSTYLE
var mapStyle=[
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

// EXPORTS
export default MapScreen;

/* 
Pour améliorer la map, aller voir l'ancien dépôt git 
graysseguier/Application_C7/screens/MapScreen
(liste des activités et des services, localisation de l'utilisateur et 
permissions, ...)
*/