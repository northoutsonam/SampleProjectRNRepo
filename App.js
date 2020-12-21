import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {  View, StyleSheet } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

function App() {

  // ===================={COMPONENT DID MOUNT}=======================//
  useEffect(() => {
    console.log('component Did mount')
    return () => {
      console.log('component unmount')
    };
  }, []);

  // ===================={MAIN UI}=======================//
  return (
    <>
      <View style={Styles.container}>
        <AppNavigation />
      </View>
    </>
  );
}

export default App;

/*  App.js screen style. */
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  }
});