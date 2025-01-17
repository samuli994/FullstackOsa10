import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useMe } from '../hooks/useMe';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const { me } = useMe();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        <Link to="/" underlayColor="transparent">
          <AppBarTab text="Repositories" />
        </Link>
        {me ? (
          <Pressable onPress={handleSignOut}>
            <AppBarTab text="Sign out" />
          </Pressable>
        ) : (
          <Link to="/signin" underlayColor="transparent">
            <AppBarTab text="Sign in" />
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
