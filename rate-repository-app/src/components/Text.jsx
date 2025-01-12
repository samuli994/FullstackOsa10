import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import theme from './theme';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: theme.fontFamily,
    fontSize: 20,
  },
});

export default App;
