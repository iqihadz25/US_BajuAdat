// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Baju Adat (*Logo)</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import react from 'react';
import {Text, View, Image, Button, TextInput} from 'react-native';

import Splash from  './components/SplashScreen'
import Welcome from  './components/Welcome'
import Menu from  './components/Menu'
import AcehMateri from  './components/AcehMateri'
import BaliMateri from  './components/BaliMateri'
import Quis from  './components/Quis'

const App = () => {
  return (
    //<Splash />
    //<Welcome />
    //<Menu />
    //<AcehMateri />
    //<BaliMateri />
    //<KategoriWilayah />
    <Quis />
  );
}

export default App;
