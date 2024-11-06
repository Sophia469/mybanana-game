import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Welcome from './Welcome';
import { getBananaData } from './BananaAPI';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBananaData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Welcome />
      {data ? (
        <View>
          <Text>Question: {data.question}</Text>
          <Image source={{ uri: data.image }} style={styles.image} />
          <Text>Solution: {data.solution}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default App;
