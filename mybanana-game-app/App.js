// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import { getBananaData } from './src/BananaAPI';
import Welcome from './src/Welcome'; 
const App = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');
  const [note, setNote] = useState('[Wait for first game]');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBananaData();
      setData(result);
    };
    fetchData();
  }, []);

  const handleInput = () => {
    if (parseInt(input) === data.solution) {
      setNote('Correct! - Click below for a new game.');
    } else {
      setNote('Not Correct!');
    }
  };

  const newGame = () => {
    setNote('[Wait for first game]');
    setInput('');
    setData(null);
    const fetchData = async () => {
      const result = await getBananaData();
      setData(result);
    };
    fetchData();
  };

  return (
    <View style={styles.container}>
      <AppNavigator />
      <Welcome />
      {data ? (
        <View>
          <Image source={{ uri: data.image }} style={styles.image} />
          <Text>Enter the missing digit:</Text>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            keyboardType="number-pad"
          />
          <Button title="Submit" onPress={handleInput} />
          <Text>{note}</Text>
          {note.includes('Correct') && <Button title="New Game" onPress={newGame} />}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
    width: 100,
    textAlign: 'center',
  },
});

export default App;
