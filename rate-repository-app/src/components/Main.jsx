import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </NativeRouter>
    </View>
  );
};

export default Main;
