import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DoctorFormScreen = () => {
  const navigation = useNavigation();
  const [ownerName, setOwnerName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [especie, setEspecie] = useState('');
  const [treatment, setTreatment] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    if (!ownerName || !address || !phone || !petName || !petAge || !diagnosis || !treatment) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    Alert.alert('Historia Clínica Guardada', 'Los datos se han guardado correctamente.');

    setOwnerName('');
    setAddress('');
    setPhone('');
    setPetName('');
    setPetAge('');
    setDiagnosis('');
    setTreatment('');
    setNotes('');
  };

  return (
    <View style={styles.containerScroll}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Historia Clínica de la Mascota</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre del Propietario:</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe el nombre del propietario"
            value={ownerName}
            onChangeText={setOwnerName}
          />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre del Propietario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del propietario"
          value={ownerName}
          onChangeText={setOwnerName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dirección:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe la dirección del propietario"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el teléfono del propietario"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre de la Mascota:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre de la mascota"
          value={petName}
          onChangeText={setPetName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Edad de la Mascota:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe la edad de la mascota"
          value={petAge}
          onChangeText={setPetAge}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Especie:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe la especie de la mascota"
          value={especie}
          onChangeText={setDiagnosis}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Raza:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe raza de la mascota"
          value={treatment}
          onChangeText={setTreatment}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sexo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe Macho/Hembra"
          value={treatment}
          onChangeText={setTreatment}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Origen del Paciente:</Text>
        <TextInput
          style={styles.input}
          placeholder=" Estado/Pais"
          value={treatment}
          onChangeText={setTreatment}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de Nacimiento:</Text>
        <TextInput
          style={styles.input}
          placeholder=" dd/mm/aa"
          value={treatment}
          onChangeText={setTreatment}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso:</Text>
        <TextInput
          style={styles.input}
          placeholder="Kg"
          value={treatment}
          onChangeText={setTreatment}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hembra Ultimo Celo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Fecha"
          value={treatment}
          onChangeText={setTreatment}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Notas:</Text>
        <TextInput
          style={[styles.input, styles.notes]}
          placeholder="Escribe cualquier nota adicional"
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </View>  
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('VacunaForm')}
        >
          <Text style={styles.navigationText}>→ Ir al Formulario de Vacunas</Text>
        </TouchableOpacity>

        <Button title="Guardar Historia Clínica" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    paddingTop: 50,
  },
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    flex: 1,
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

export default DoctorFormScreen;
