import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';

const VacunaFormScreen = ({ navigation }) => {
  const [vaccineName, setVaccineName] = useState('');
  const [vaccineDate, setVaccineDate] = useState('');

  const handleSave = () => {
    if (!vaccineName || !vaccineDate) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    Alert.alert('Vacuna Registrada', 'Los datos de la vacuna se han guardado correctamente.');
    // Navega a la pantalla de motivo de consulta
    navigation.navigate('MotivoConsulta');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Formulario de Vacunas</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre de la Vacuna:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre de la vacuna"
          value={vaccineName}
          onChangeText={setVaccineName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de Aplicación:</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/aaaa"
          value={vaccineDate}
          onChangeText={setVaccineDate}
        />
      </View>
      <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('MotivoConsulta')}
        >
          <Text style={styles.navigationText}>→ Ir a Motivo de Consulta</Text>
        </TouchableOpacity>

      <Button title="Guardar Vacuna" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
  },
  navigationButton: {
    marginVertical: 10,
    alignItems: 'flex-end',
  },
  navigationText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default VacunaFormScreen;
