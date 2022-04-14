import React from 'react';
import {Text} from 'react-native';

const firebase = require("firebase");
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyDP_Dbevczlh2eN1Zo9AyUvLZICoxnKhIc",
  authDomain: "fzdf-2c9ff.firebaseapp.com",
  databaseURL: "https://fzdf-2c9ff.firebaseio.com",
  projectId: "fzdf-2c9ff",
  storageBucket: "fzdf-2c9ff.appspot.com",
  messagingSenderId: "750961760063",
  appId: "1:750961760063:web:9ca0c45a75f67663c8e58a",
  persistence: true,
};

firebase.initializeApp(firebaseConfig);

const rootRef = firebase.database().ref();

class DatabaseComponent extends React.Component {

  render () {
    return (
      <Text>Salut</Text>
    )

  }

}

export default DatabaseComponent;
