import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const MotivoConsultaScreen = ({ navigation }) => {
  const [reason, setReason] = useState('');

  const handleSave = () => {
    if (!reason) {
      Alert.alert('Error', 'Por favor completa el campo del motivo.');
      return;
    }

    Alert.alert('Consulta Registrada', 'Motivo de consulta guardado correctamente.');
    navigation.goBack(); // Simula regresar al flujo principal.
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Motivo de la Consulta</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Motivo:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Describe el motivo de la consulta"
          value={reason}
          onChangeText={setReason}
          multiline
        />
      </View>

      <Button title="Guardar Motivo" onPress={handleSave} />
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
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
  },
});

export default MotivoConsultaScreen;
