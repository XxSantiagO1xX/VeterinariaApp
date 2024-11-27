import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      {/* Notificaciones */}
      <View style={styles.option}>
        <Text style={styles.optionText}>Notificaciones</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      {/* Idioma */}
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => alert("Cambiar idioma")}>
        <Text style={styles.optionText}>Idioma</Text>
        <Text style={styles.optionValue}>Español</Text>
      </TouchableOpacity>

      {/* Acerca de */}
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => alert("Versión 1.0.0")}>
        <Text style={styles.optionText}>Acerca de</Text>
        <Text style={styles.optionValue}>Versión 0.0.0</Text>
      </TouchableOpacity>

      {/* Política de privacidad */}
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => alert("Política de privacidad")}>
        <Text style={styles.optionText}>Política de privacidad</Text>
      </TouchableOpacity>

      {/* Cerrar sesión */}
      <TouchableOpacity
        style={[styles.option, styles.logoutButton]}
        onPress={() => alert("Sesión cerrada")}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 18,
  },
  optionValue: {
    fontSize: 16,
    color: '#888',
  },
  logoutButton: {
    marginTop: 30,
    justifyContent: 'center',
  },
  logoutText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
