import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Simulamos la validación de usuario (esto se hace en tu lógica de login)
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');
  
      if (email === storedEmail && password === storedPassword) {
        // Guardamos el token en AsyncStorage (simulado como 'token')
        const token = 'someAuthToken'; // Aquí podrías tener un token real de tu backend
        await AsyncStorage.setItem('token', token);
  
        // Verificar si se guardó correctamente
        const storedToken = await AsyncStorage.getItem('token');
        console.log('Token guardado:', storedToken); // Deberías ver el token en la consola
  
        // Cambiar el estado de autenticación
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Correo o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión');
    }
  };
  

  const handleRegister = async () => {
    try {
      // Guardamos los datos del usuario en AsyncStorage
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      Alert.alert('Éxito', 'Usuario registrado correctamente');
    } catch (error) {
      console.error('Error en el registro:', error);
      Alert.alert('Error', 'Hubo un problema al registrar al usuario');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
});

export default LoginScreen;
