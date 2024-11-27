import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import PetListScreen from './screens/PetListScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

// Stack de Perfil
function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Settings')} // Botón que lleva a la pantalla de Configuración
              title="Configuración"
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingsScreen} // Solo se navega a esta pantalla cuando se hace clic en el botón
        options={{ title: 'Configuración'}}
      />
    </ProfileStack.Navigator>
  );
}


// Pantallas con pestañas (menú inferior)
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Appointment') {
            iconName = 'calendar';
          } else if (route.name === 'PetList') {
            iconName = 'paw';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} options={{headerShown: false}} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} options={{headerShown: false}} />
      <Tab.Screen name="PetList" component={PetListScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log('Token recuperado:', token);
      setIsAuthenticated(!!token); // Si hay token, el usuario está autenticado
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }} // Sin encabezado para las pestañas
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} // Sin encabezado en Login
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
