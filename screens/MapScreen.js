// IMPORTS
import React from 'react';
import { Text, View,TouchableOpacity, Dimensions,Animated,Keyboard,Image,Platform} from 'react-native';
import {Container,Tabs,Tab} from 'native-base';
//import { MapView } from 'expo';
import MapView, { Marker } from 'react-native-maps';
import {SearchBar} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
//import BarreMenu from '../../../Navigation/BarreMenu';
//import * as Permissions from 'expo-permissions';

import CustomHeader from '../components/CustomHeader';

// CONSTANTS :


async function checkMultiPermissions() {
  if (Platform.OS==='android'){
    const { Permissions } = Expo;
  var { status, expires, permissions } = await Permissions.askAsync(Permissions.LOCATION)
  }
}

var mapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
var mapStyle2=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
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
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
var mapStyle3=[
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


// Services pour les membres des équipes :
var listeServices=[
  {
    type:'Service',
    nom:'Team Room',
    lieu:['Agora'],
    description:'Reception',
    campus:'CS',
    imageName:'accueil',
    id:3,
    region:[{latitude:48.709528, longitude:2.166622,latitudeDelta:0.005,longitudeDelta:0.005}]

  },

  {
    type:'Service',
    nom:'University restaurant',
    lieu:['Eiffel'],
    description:'Campus CS',
    campus:'CS',
    imageName:'douche',
    id:6,
    region:[{latitude:48.708992,longitude: 2.158008,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.708397,longitude: 2.163993,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.708993,longitude: 2.166763,latitudeDelta:0.005,longitudeDelta:0.005}]
  },
  
  {
    type:'Service',
    nom:'Toilets CS',
    lieu:['Résidence 1', 'Bréguet', ],
    description:'Campus CS',
    campus:'CS',
    imageName:'toilettes',
    id:5,
    region:[{latitude:48.707778,longitude: 2.160398,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.708294,longitude:2.164983,latitudeDelta:0.005,longitudeDelta:0.005}]

  },

  {
    type:'Service',
    nom:'Ostéopathes',
    lieu:['Orsay'],
    campus:'Orsay',
    description:'Tour de terrain',
    imageName:'osteopathes',
    id:4,
    region:[{latitude:48.708457,longitude:2.157429,latitudeDelta:0.005,longitudeDelta:0.005}]

  },

  {
    type:'Service',
    nom:'Petit-Déjeuner',
    lieu:['Eiffel'],
    description:'Eiffel',
    campus:'CS',
    imageName:'breakfast',
    id:15,
    region:[{latitude:48.708225,longitude: 2.163852,latitudeDelta:0.005,longitudeDelta:0.005}]

  },

  
  {
    type:'Service',
    nom:'',
    lieu:[''],
    description: '',
    campus:'CS',
    imageName:'buvette',
    id:12,
    region:[{latitude:48.707949,longitude: 2.157612,latitudeDelta:0.005,longitudeDelta:0.005}]

  },

  
  {
    type:'Service',
    nom:'',
    lieu:[''],
    description: '',
    campus:'CS',
    imageName:'buvette',
    id:20,
    region:[{latitude:48.707949,longitude: 2.157612,latitudeDelta:0.005,longitudeDelta:0.005}]

  }

]

// Activités et informations utiles pour le public :
var listeActivites=[

  {
    type:'Activites',
    nom:'Shuttle buses',
    lieu:['Bréguet', 'Bâtiment 225 Orsay', 'Bâtiment 310 Orsay'],
    description:'Pôle navette',
    campus:'CS',
    imageName:'navette',
    id:10,
    region:[{latitude:48.709608,longitude: 2.162919,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.713055,longitude: 2.213924,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.698671,longitude: 2.165720,latitudeDelta:0.004,longitudeDelta:0.004},{latitude:48.700783, longitude:2.176774,latitudeDelta:0.004,longitudeDelta:0.004}]

  },

]

const campusGifRegion={latitude:48.709743,longitude:2.162944,latitudeDelta:0.012,longitudeDelta:0.012}
const campusOrsayRegion={latitude:48.699260,longitude: 2.180779,latitudeDelta:0.012,longitudeDelta:0.012}

const {width,height}=Dimensions.get('window')


// COMPONENT
class MapScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      topPosition: new Animated.Value(height-450),
      recherche:'',
      listeMarkers:[],
      campus:'CS',
      listeRechercheServices: listeServices,
      listeRechercheActivites: listeActivites,
      region: campusGifRegion
    };
  }

  componentDidMount() {
    //checkMultiPermissions();
  }

  colorTab() {
    return('#1C1F2A');
    // '#070027'
  }

  closeSearch() {
    Animated.timing(
      this.state.topPosition,
      {
          toValue: height*0.777,
          duration:300
      }
    ).start();
  }

  changeText(text){
    this.setState(
      {recherche: text},
      ()=>this.triDonnes()
    );
  }
  
  triDonnes(){
    var text = this.state.recherche.toUpperCase();

    var listeRechercheServices = listeServices.filter(function(data){
      var nom=data.nom.toUpperCase()
      return(nom.indexOf(text)!=-1)});

    var listeRechercheActivites = listeActivites.filter(function(data){
      var nom=data.nom.toUpperCase()
      return(nom.indexOf(text)!=-1)});

    this.setState({listeRechercheActivites,listeRechercheServices});
  }

  pressMap(){
    Keyboard.dismiss();
    this.closeSearch()
  }

  expandSearch(){
    Animated.timing(
      this.state.topPosition,
      {
          toValue:height-450,
          duration:300
      }
    ).start();
  }

  async addMarker(latlng,title,description,id){
    var marker={
      id:id,
      latlng:latlng,
      title:title,
      description:description
    }
    this.setState({
      listeMarkers:this.state.listeMarkers.concat(marker)
    })
  }

  addMarker2(latlng,title,description,id, image){
    var Tmarker = [];
    var n = latlng.length;
    var i;
    for (i=0;i<n;i++){
      Tmarker.push({
        id:id[i],
        latlng:latlng[i],
        title:title[i],
        description:description[i],
        imageName: image
      });
    }

    n = Tmarker.length;  
    
    this.setState({
      listeMarkers:this.state.listeMarkers.concat(Tmarker)
    });
  }

  clickSport(region,nom,lieu,id,campus,image){
    Keyboard.dismiss();
    this.closeSearch();
    
    var n = region.length;
    
    this.setState({campus:campus});
    this.setState({listeMarkers:[]},()=>{
      var latlng=[]
      var title=[]
      var description=[]
      var id=[]
      var longitudes=[]
      var latitudes=[]
      var Slongitude=0
      var Slatitude=0

      for (i=0;i<n;i++){
        latlng.push({longitude:region[i].longitude, latitude:region[i].latitude})
        longitudes.push(region[i].longitude)
        latitudes.push(region[i].latitude)
        Slongitude=Slongitude+region[i].longitude
        Slatitude=Slatitude+region[i].latitude
        title.push(nom)
        description.push(lieu[i])
        id.push(id+200*i)
      }
      this.addMarker2(latlng,title,description,id,image)

      function compare(x, y) {
          return x - y;
      }
     
      latitudes.sort(compare)
      longitudes.sort(compare)
      var newRegion={latitude:(latitudes[latitudes.length-1]+latitudes[0])/2, longitude:(longitudes[longitudes.length-1]+longitudes[0])/2, latitudeDelta:(Math.abs(latitudes[latitudes.length-1]-latitudes[0])+0.005), longitudeDelta:(Math.abs(longitudes[longitudes.length-1]-longitudes[0])+0.005)}
      
      this.focusRegion(newRegion)
   })
 }

  focusRegion(region){
    this.mapview.animateToRegion(region,1000)
  }

  changeCampus(nom){
    this.setState({campus:nom})
    switch(nom){
      case 'CS':
        this.focusRegion(campusGifRegion)
        break
      case 'X':
        this.focusRegion(campusXRegion)
        break
      case 'Orsay':
        this.focusRegion(campusOrsayRegion)
    }
  }

  changeRegion(region){
    this.setState({region:region})
  }

  // createIcon(iconType,iconName,iconColor){
  //   switch(iconType){
  //     case 'Ionicons':
  //       return(
  //         <Ionicons name={iconName} size={35} color={iconColor}/>
  //       )
  //       break
  //     case 'MaterialCommunityIcons':
  //         return(
  //           <MaterialCommunityIcons name={iconName} size={35} color={iconColor}/>
  //         )
  //         break
  //     case 'FontAwesome5':
  //       return(
  //         <FontAwesome5 name={iconName} size={35} color={iconColor}/>
  //       )
  //       break
  //   }

  // }

  urlImage(nom){
    switch(nom){
      case 'football':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'handball':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'volleyball':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'basketball':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'cheer':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'badminton':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'escalade':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'equitation':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'ultimate':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'judo':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'escrime':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'judo':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'raid':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'ping-pong':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'rugby':
        return(require("../assets/images/centrale-7.png"))
        break
      case '10km':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'natation':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'tennis':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'volleyball':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'waterpolo':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'tiralarc':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'montgolfiere':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'standdetir':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'lasergame':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'diner':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'feuartifice':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'sautelastique':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'osteopathes':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'neymarjr5':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'ceremoniecloture':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'biathlon':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'pizza':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'toilettes':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'accueil':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'douche':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'pointchange':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'buvette':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'navette':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'secouriste':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'tente':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'dejeuner':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'bubble-foot':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'breakfast':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'confetti':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'toss':
        return(require("../assets/images/centrale-7.png"))
        break
      case 'coeur':
        return(require("../assets/images/centrale-7.png"))
        break

      default:
        return(require("../assets/images/centrale-7.png"))
    }
  }

  render() {
    const domicile=[[48.862787,2.190225],[48.861142, 2.193969]];
    const gif=[[48.709731,2.16],[48.707556,2.166679]];
    var hauteur= 0.091/(this.state.region.latitudeDelta);
    
    return(
      <Container style={{flex:1}}>



        <View style={{flex:1}}>

          <View style={{height:35, width:width, flexDirection:'row', backgroundColor:'white', zIndex:1, opacity:0.8}}>

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

          </View>

          <MapView
            ref={mapview => this.mapview = mapview}
            showsUserLocation
            showsCompass={true}
            customMapStyle={mapStyle3}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1}}
            initialRegion={campusGifRegion}
            showsMyLocationButton
            //onRegionChange={(region)=>this.changeRegion(region)}
            onPress={()=>this.pressMap()}
          >
            {this.state.listeMarkers.map( marker => (
              <Marker
                key={marker.id}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              >
                <Image source={this.urlImage(marker.imageName)} style={{height:35,width:35}}/>
              </Marker>
            ))} 
          </MapView>

          <View  style={{height:58}}/>
        
        <Animated.View style={{
          height: 450,
          width: width,
          position: 'absolute',
          top: this.state.topPosition,
          borderTopWidth: 1,
          borderColor: '#E9EAEB',
          backgroundColor: 'white'}}>

          <SearchBar 
            placeholder = 'Service / Activity' 
            onClearText = {()=>{}}
            onFocus = {()=>this.expandSearch()}
            onChangeText = {(text)=>this.changeText(text)}
            onCancel = {()=>{this.closeSearch()}}
            value = {this.state.recherche}
            lightTheme = {true}
            inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: '#e5e5e5'}}
          />

          <Tabs            
            tabContainerStyle = {{ height: 40}}
            tabBarUnderlineStyle = {{backgroundColor: this.colorTab(),height: 2}}
          >

            <Tab
            heading = "Player Services" 
            textStyle = {{fontSize:13,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
            activeTextStyle = {{fontSize:13,fontWeight:'bold',color:this.colorTab()}}
            tabStyle = {{backgroundColor:'white'}}
            activeTabStyle = {{backgroundColor:'white'}}
            >
              {
                this.state.listeRechercheServices.length === 0 ?
                <View style={{flex:1,alignItems:'center'}}>
                  <Text style={{color:'grey',marginTop:20}}>
                    Aucune suggestion trouvée
                  </Text>
                </View> :
                <FlatList
                  onScroll={()=>Keyboard.dismiss()}
                  keyboardShouldPersistTaps="handled"
                  data={this.state.listeRechercheServices}
                  keyExtractor={(item)=> item.id.toString()}
                  renderItem={({item})=>{
                    return(
                      <TouchableOpacity onPress={()=>this.clickSport(item.region,item.nom,item.lieu,item.id,item.campus,item.imageName)} style={{height:70,width:width,borderTopWidth:1,borderColor:'#e4e4e4',flexDirection:'row'}}>
                        <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                            
                                <Image style={{height:30,width:30,resizeMode:'contain'}} source={this.urlImage(item.imageName)}/>
                            
                        </View>
                        <View style={{flex:10,flexDirection:'column',marginLeft:10,justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:19}}>{item.nom}</Text>
                            <Text style={{color:'grey',fontSize:16}}>{item.description}</Text>
                        </View>
                      </TouchableOpacity>
                  )
                  }}
                />
              }
            </Tab>

            <Tab heading="Public Activities" 
            textStyle={{fontSize:13,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
            activeTextStyle={{fontSize:13,fontWeight:'bold',color:this.colorTab()}}
            tabStyle={{backgroundColor:'white'}}
            activeTabStyle={{backgroundColor:'white'}}
            >
              {this.state.listeRechercheActivites.length===0?
              <View style={{flex:1,alignItems:'center'}}><Text style={{color:'grey',marginTop:20}}>Aucune suggestion trouvée</Text></View>:
              <FlatList
                onScroll={()=>Keyboard.dismiss()}
                keyboardShouldPersistTaps="handled"
                data={this.state.listeRechercheActivites}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=>{
                  return(
                    <TouchableOpacity onPress={()=>this.clickSport(item.region,item.nom,item.lieu,item.id,item.campus,item.imageName)} style={{height:70,width:width,borderTopWidth:1,borderColor:'#e4e4e4',flexDirection:'row'}}>
                      <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                          
                              <Image style={{height:30,width:30,resizeMode:'contain'}} source={this.urlImage(item.imageName)}/>
                          
                      </View>
                      <View style={{flex:10,flexDirection:'column',marginLeft:10,justifyContent:'center'}}>
                          <Text style={{fontWeight:'bold',fontSize:19}}>{item.nom}</Text>
                          <Text style={{color:'grey',fontSize:16}}>{item.description}</Text>
                      </View>
                    </TouchableOpacity>
                )
                }}
              />}
            </Tab>

          </Tabs>
        </Animated.View>
        </View>
          
      </Container>
    )
  }

}

// EXPORTS
export default MapScreen;

// TOSS :


{/* <Overlay
        style={{zIndex:-1}}
        image={require('../../../../../../../../../Images/TestPlan.png')}
        bounds={gif}
        /> */}
      
      {/* <Overlay
      image={require('../../../../../../../../../Images/planCS2.png')}
      bounds={[
        [48.710023, 2.160917],
        [48.707574, 2.166347]
      ]}
      /> */}


      {/* <View style={{flex:7,flexDirection:'row'}}>
            <View style={{flex:1,justifyContent:'flex-end'}}>
              <TouchableOpacity style={{borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center',height:30,borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                <Text style={{color:'white'}}>Campus CS</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
              <TouchableOpacity style={{borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center',height:30}}>
                <Text style={{color:'white'}}>Campus X</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
              <TouchableOpacity style={{borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center',height:30,borderBottomRightRadius:5,borderTopRightRadius:5}}>
                <Text style={{color:'white'}}>Orsay</Text>
              </TouchableOpacity>
            </View> */}
