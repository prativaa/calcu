import React, {useState} from 'react';
import {View, StyleSheet, Text, Platform, TouchableOpacity} from 'react-native';
// import {RNCamera} from 'react-native-camera';
import {BleManager} from 'react-native-ble-plx';

const App = () => {
  const [deviceName, setDeviceName] = useState({
    connectedDevice: null,
  });
  const displayDevices = () => {
    const Manager = new BleManager();
    if (Platform.OS === 'android') {
      const subscription = Manager.onStateChange(state => {
        if (state === 'PoweredOn') {
          console.log('Device is powered on');
          Manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
              console.log('error', error);
            }
            if (device !== null) {
              console.log(
                'Device found ----> [id,name]',
                device.id,
                device.name,
              );
              var device_name = device.name;
              console.log('DEVICE NAME:', device_name);
              setDeviceName({connectedDevice: device_name});
            }
          });
          subscription.remove();
        }
      }, true);
    }
  };
  return (
    <View style={styles.container}>
      {/* <RNCamera style={styles.camStyle} /> */}
      <TouchableOpacity
        onPress={() => displayDevices()}
        style={styles.buttonDisplay}>
        <Text style={styles.buttonText}>Display connected devices</Text>
      </TouchableOpacity>
      <Text style={styles.displayText}>{deviceName.connectedDevice}</Text>
      {/* <Text style={styles.textStyle}>Calcu</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
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
  buttonDisplay: {
    color: 'white',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  buttonText: {
    color: 'black',
  },
  displayText: {
    color: 'black',
    alignItems: 'center',
    padding: 10,
  },
});
export default App;
