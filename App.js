import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Cam from './src/components/Cam';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Calcu</Text>
      <RNCamera style={styles.camStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    position: 'absolute',
    bottom: 200,
    left: 50,
    fontSize: 32,
    fontWeight: '600',
  },
  camStyle: {
    flex: 0.25,
    position: 'absolute',
    top: 50,
    right: 20,
    height: 200,
    width: 200,
  },
});
export default App;
