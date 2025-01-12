import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
  },
  scrollView: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        <Link to="/" underlayColor="transparent">
          <AppBarTab text="Repositories" />
        </Link>
        <Link to="/signin" underlayColor="transparent">
          <AppBarTab text="Sign in" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
