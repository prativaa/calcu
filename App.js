import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import {RNCamera} from 'react-native-camera';
import {BleManager} from 'react-native-ble-plx';

const App = () => {
  const [deviceName, setDeviceName] = useState([]);
  const createAlert = status =>
    Alert.alert('Blutooth Status', status, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const deviceFound = device =>
    Alert.alert('Connected Device', device, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const displayDevices = () => {
    const Manager = new BleManager();
    if (Platform.OS === 'android') {
      const subscription = Manager.onStateChange(state => {
        console.log('State:', state);
        var status = state;
        createAlert(status);
        if (state === 'PoweredOn') {
          Manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
              console.log('error', error);
            }
            if (device !== null) {
              console.log('Device found [id, name]', device.id, device.name);
              var device_name = device.name;
              console.log('DEVICE NAME:', device_name);
              deviceFound(device_name);
              setDeviceName([...deviceName, device_name]);
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
      {deviceName &&
        deviceName.map((device, index) => {
          return (
            <Text style={styles.displayText} key={index}>
              {device}
            </Text>
          );
        })}
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
    paddingTop: 10,
  },
});
export default App;
