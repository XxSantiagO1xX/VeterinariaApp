import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PetListScreen = () => {
  const [pets, setPets] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [peso, setPeso] = useState('');
  const [edadUnit, setEdadUnit] = useState('años');

  useEffect(() => {
    const loadPets = async () => {
      const storedPets = await AsyncStorage.getItem('pets');
      if (storedPets) {
        setPets(JSON.parse(storedPets));
      }
    };

    loadPets();
  }, []);

  const addPet = async () => {
    if (!nombre || !edad || !peso) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    const newPet = { nombre, edad: `${edad} ${edadUnit}`, peso: parseFloat(peso) };
    const updatedPets = [...pets, newPet];

    try {
      await AsyncStorage.setItem('pets', JSON.stringify(updatedPets));
      setPets(updatedPets);
      setNombre('');
      setEdad('');
      setPeso('');
      setEdadUnit('años');
      Alert.alert('Éxito', 'Mascota agregada correctamente');
    } catch (error) {
      console.error('Error al agregar mascota:', error);
      Alert.alert('Error', 'Hubo un problema al agregar la mascota');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <FlatList
        data={pets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.petCard}>
            <Text style={styles.petName}>{item.nombre}</Text>
            <Text>{`Edad: ${item.edad}`}</Text>
            <Text>{`Peso: ${item.peso} kg`}</Text>
          </View>
        )}
        style={styles.flatList}
      />

      <View style={styles.addPetContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Edad"
            keyboardType="numeric"
            value={edad}
            onChangeText={setEdad}
          />
          <View style={styles.unitSelectionContainer}>
            <TouchableOpacity
              style={[styles.unitButton, edadUnit === 'años' && styles.selectedButton]}
              onPress={() => setEdadUnit('años')}
            >
              <Text style={styles.unitButtonText}>Años</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.unitButton, edadUnit === 'meses' && styles.selectedButton]}
              onPress={() => setEdadUnit('meses')}
            >
              <Text style={styles.unitButtonText}>Meses</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Peso (KG)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <Button title="Agregar Mascota" onPress={addPet} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f1f1f1',
  },
  petCard: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 10,
    borderWidth: .2,
    borderColor: '#ccc',
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addPetContainer: {
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 30,
    textAlign: 'center',
  },
  unitSelectionContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  unitButton: {
    height: 40,
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: '#048595', // Color de selección
  },
  unitButtonText: {
    fontSize: 16,
    color: '#333',
  },
  flatList: {
    flex: 1,
    marginBottom: 20,
  },
});

export default PetListScreen;
