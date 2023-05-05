import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { AppRoutes } from './src/routes/app.routes';
import { Login } from './src/pages/login';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#00386B'}}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <AppRoutes />
    </View>
  );
}