import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AppointmentScreen = () => {
  const [pet, setPet] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios' ? true : false);
    setDate(currentDate.toLocaleDateString());
  };

  const handleSubmit = () => {
    alert(`Cita agendada para la mascota ${pet} el ${date} a las ${time} por ${reason}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Cita</Text>
      <Text style={styles.subtitle}>Rellene los campos solicitados</Text>

      <Text style={styles.subInput}>Nombre del Paciente:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa Nombre"
        value={pet}
        onChangeText={setPet}
      />

      <Text style={styles.subInput}>Seleccionar Fecha:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
        <Text style={styles.inputText}>{date || 'dd/mm/aa'}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date ? new Date(date) : new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.subInput}>Seleccionar Hora:</Text>
      <TextInput
        style={styles.input}
        placeholder="00:00 hrs"
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.subInput}>Motivo de la cita:</Text>
      <TextInput
        style={styles.input}
        placeholder="Motivo"
        value={reason}
        onChangeText={setReason}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Agendar Cita</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '300',
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  dateInput: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    paddingLeft: 15,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AppointmentScreen;
