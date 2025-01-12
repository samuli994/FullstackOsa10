import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    padding: 10,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
