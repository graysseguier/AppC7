//IMPORTS
import React from 'react'
import { View, StyleSheet, TouchableHighlight, Platform } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import Colors from '../constants/Colors';

//COMPONENTS
class SecondBar extends React.Component {
  render(){
    return (
      <View style={styles.general}>
        <View style={styles.icone}>
          <TouchableHighlight>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
              size={26}
              style={{ marginBottom: -3 }}
              color={Colors.tabIconDefault}
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  general: {
    position:'absolute',
    alignItems: 'center',
  },
  icone: {
    backgroundColor: 'black',
    height: 40,
    position : "absolute",
  }
});

//EXPORTS
export default SecondBar;
