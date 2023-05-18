import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const TrafficLight = () => {
  const [redOn, setRedOn] = useState(true);
  const [yellowOn, setYellowOn] = useState(false);
  const [greenOn, setGreenOn] = useState(false);

  const turnOnRed = () => {
    setRedOn(true);
    setYellowOn(false);
    setGreenOn(false);
  };

  const turnOnYellow = () => {
    setRedOn(false);
    setYellowOn(true);
    setGreenOn(false);
  };

  const turnOnGreen = () => {
    setRedOn(false);
    setYellowOn(false);
    setGreenOn(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.circle,
          { backgroundColor: redOn ? 'red' : 'gray' },
        ]}
        onPress={turnOnRed}
      />
      <TouchableOpacity
        style={[
          styles.circle,
          { backgroundColor: yellowOn ? 'yellow' : 'gray' },
        ]}
        onPress={turnOnYellow}
      />
      <TouchableOpacity
        style={[
          styles.circle,
          { backgroundColor: greenOn ? 'green' : 'gray' },
        ]}
        onPress={turnOnGreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
    margin: 10
  },
});

export default TrafficLight;
