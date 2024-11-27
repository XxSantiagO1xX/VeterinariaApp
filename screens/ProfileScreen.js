import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const name = await AsyncStorage.getItem('userName');
        const phone = await AsyncStorage.getItem('userPhone');
        const email = await AsyncStorage.getItem('userEmail');

        if (name && email) {
          setUser({ name, phone, email });
        } else {
          console.log('Usuario no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Información del usuario */}
      {user ? (
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>Nombre: {user.name}</Text>
          <Text style={styles.infoText}>Correo: {user.email}</Text>
          <Text style={styles.infoText}>Teléfono: {user.phone}</Text>
        </View>
      ) : (
        <Text>No hay usuario registrado.</Text>
      )}

      {/* Botones de opciones */}
      <TouchableOpacity 
        style={styles.optionButton} 
        onPress={() => navigation.navigate('Appointments')}>
        <Ionicons name="calendar" size={24} color="black" />
        <Text style={styles.optionText}>Historial de Citas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.optionButton} 
        onPress={() => navigation.navigate('PetList')}>
        <Ionicons name="paw" size={24} color="black" />
        <Text style={styles.optionText}>Mis Mascotas</Text>
      </TouchableOpacity>

      {/* Acceso a Configuración */}
      <TouchableOpacity 
        style={styles.optionButton} 
        onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings" size={24} color="black" />
        <Text style={styles.optionText}>Configuración</Text>
      </TouchableOpacity>

      {/* Cerrar sesión */}
      <TouchableOpacity 
        style={[styles.optionButton, styles.logoutButton]} 
        onPress={handleLogout}>
        <Ionicons name="log-out" size={24} color="red" />
        <Text style={[styles.optionText, styles.logoutText]}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  infoSection: {
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    width: '100%'
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    width: ' 100%',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#ffe6e6',
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
