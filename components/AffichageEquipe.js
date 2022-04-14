// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class Team extends React.Component {
    constructor(props){
        super(props)
        masculin:false

      }
  render() {
    const { team } = this.props
    //console.log(team)
    return (
      <TouchableOpacity
        style={styles.main_container}
        //onPress={() => this.props.navigation.navigate("PdfScreen",  {title:'Team Info', uri:'https://drive.google.com/file/d/1XYgcKsoA5POTLL91uOzy_bJPt8H0Wwfp/view?usp=sharing'})}
        >
        <Image
          style={styles.image}
          source={{uri: team.image.image}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{team.teamName.name}</Text>
          </View>
          <View style={styles.description_container}>
              <Text>
                  {team.texte.texte}
              </Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Head Coach : Pierre de Chambure</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 150,
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    margin: 5
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
 
})

export default Team