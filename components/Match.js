// IMPORTS :
import React from 'react';
import {Text, View, Image, Animated, Dimensions, StyleSheet} from 'react-native'
//Rajouter les liaisons avec la base de donnée

//CONSTANTS :
const {width} = Dimensions.get('window')

//COMPONENTS :

class Match extends React.Component {
    constructor(props){
        super(props)
    }
 
render () {
    //const { team } = this.props
    //console.log(team)
    
    const { match } = this.props
    //console.log("match ", match)
    if (match != undefined ){       //on n'affiche que les matchs en cours de jeu
      return (
    <View style={styles.bigbox}>
        <Text style = {styles.title}>
            {match.matchName.name}
        </Text>
        
    <View style={styles.score_container}>
            <View style={styles.half_score}>
                <Image source={{uri: match.image1.image1}} style={styles.images_style}/>
                <Text style={styles.team_text_style}>{match.equipe1.equipe1}</Text>

            </View>
            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.score_style}>{match.score1.score1} - {match.score2.score2}</Text>
            </View>
            <View style={styles.second_half_score}>
                <Text style={styles.team_text_style}>{match.equipe2.equipe2}</Text>
                <Image source={{uri: match.image2.image2}} style={styles.images_style}/>
            </View>
            </View>
            <View style = {styles.info_container}>
            <Text >
            {match.date.date} , {match.enCours.enCours}
            </Text>
            </View>
            
   
    
    </View>


        )}
    else{
        return (
            <View>
            <Text> No match available</Text>
            </View>
        
        
                )
    }
    }
}
const styles = StyleSheet.create({
    score_container: {height:80,flexDirection:'row',margin:0,borderWidth:1,borderRadius:10,borderColor:'#dedede'},
    half_score : {flex:5,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'},
    images_style : {height:30,width:30,marginRight:5,marginLeft:10,resizeMode:'contain'},
    team_text_style : {fontWeight:'bold',fontSize:11,flex:1,flexWrap:'wrap',textAlign:'center'},
    score_style : {fontWeight:'bold',fontSize:16},
    second_half_score : {flex:5,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'},
    bigbox : {flex : 1, height : 100, margin : 10},
    title : {justifyContent:'flex-end',alignItems:'center', fontWeight : 'bold', fontSize : 20, textAlign:'center' },
    date : {justifyContent:'flex-start',flex : 5, textAlign: 'right', right : 5, top : 50},
    info_container : {flex : 5, flexDirection: "column", justifyContent : "flex-end", alignItems:'center'}
})




//EXPORTS :
export default Match;