import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, TouchableWithoutFeedback, Keyboard, TextInput, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgTop() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="100%"
      height="250%"
      viewBox='0 200 377 400'
    >
      <Path
        fill="url(#a)"
        d="M179.238 487.707C83.11 534.227 23.364 503.495 0 481.611V0h377v481.611c-32.543-19.383-101.635-40.423-197.762 6.096Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={5.507}
          x2={346.459}
          y1={6.565}
          y2={503.833}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DEC4FC" />
          <Stop offset={1} stopColor="#91C6FC" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPet, setSelectedPet] = useState('');
  const [isPetInputVisible, setIsPetInputVisible] = useState(false);



  // Función para manejar la selección de fecha
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>


      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.welcomeText}>Veterinaria</Text>
          <Text style={styles.subwelcomeText}>Pequeñas Especies</Text>
          <Text style={styles.subtitle}>Gestiona tus citas y mascotas de manera fácil.</Text>
        </View>
        {/* Botones de acceso rápido */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Agendar Cita</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PetList')}>
            <Text style={styles.buttonText}>Ver Mascotas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.buttonText}>Mi Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Modal para Agendar Cita */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          {/* TouchableWithoutFeedback envuelve un solo View */}
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.title}>Agendar Cita</Text>

                {/* Calendario */}
                <Calendar
                  onDayPress={handleDateSelect}
                  markedDates={{ [selectedDate]: { selected: true, selectedColor: 'blue', selectedTextColor: 'white' } }}
                />

                <Text style={styles.label}>Seleccionar Mascota:</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setIsPetInputVisible(!isPetInputVisible)}
                >
                  <Text style={styles.buttonText}>{selectedPet || 'Seleccionar Mascota'}</Text>
                </TouchableOpacity>

                {isPetInputVisible && (
                  <TextInput
                    style={styles.textInput}
                    placeholder="Escriba el nombre de su mascota"
                    value={selectedPet}
                    onChangeText={setSelectedPet}
                  />
                )}

                <Button title="Confirmar Cita" onPress={() => {
                  if (selectedDate && selectedPet) {
                    alert(`Cita agendada para el ${selectedDate} con ${selectedPet}`);
                    setModalVisible(false);
                  } else {
                    alert("Por favor, complete todos los campos.");
                  }
                }} />

                <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  containerSVG: {
    height: '30%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,

  },
  welcomeText: {
    fontSize: 60,
    color: '#34434D',
    fontWeight: 'bold',
    marginTop: -200,
  },
  subwelcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: -120,
  },
  subtitle: {
    fontSize: 10,
    color: 'gray',
    marginBottom: -350,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    width: '80%',
    height: 50,
    padding: 10,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset:{ width:  0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  buttonText: {
    color: '#ooo',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    paddingLeft: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
