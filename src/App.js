import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCldzBeQoIXXJ_6n4yK-KfHETtczCHdaOQ',
      authDomain: 'test-project-b9edd.firebaseapp.com',
      databaseURL: 'https://test-project-b9edd.firebaseio.com',
      projectId: 'test-project-b9edd',
      storageBucket: 'test-project-b9edd.appspot.com',
      messagingSenderId: '223812986460'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
