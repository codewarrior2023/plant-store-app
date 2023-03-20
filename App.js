import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />
  } else {
    return (
      <View view={styles.container}>
        <WelcomeScreen />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});
