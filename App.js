import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Cam from './src/components/Cam';

const App = () => {
  return (
    <View style={styles.container}>
      <Cam />
      <Text style={styles.textStyle}> Hello World! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    bottom: 200,
    left: 50,
    fontSize: 32,
    fontWeight: '600',
  },
});
export default App;
