// src/BananaGame.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const BananaGame = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://marcconrad.com/uob/banana/' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BananaGame;
