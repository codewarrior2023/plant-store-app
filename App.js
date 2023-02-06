import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
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
      <SafeAreaView view={styles.container}>
        <WelcomeScreen />
      </SafeAreaView>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});
