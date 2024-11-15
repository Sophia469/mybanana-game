// src/RegisterPage.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterPage = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuário registrado:', userCredential.user);
        onRegister(); // Redireciona para a página de boas-vindas após registrar
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={registerUser} />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default RegisterPage;
