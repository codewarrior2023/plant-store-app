import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('screen');

const LoginScreen = () => {
    return (  
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingBottom: 30,
                }} 
            >
                <View style={styles.header}> 
                    <Image style={styles.logo}
                        source={require('../assets/logo.png')}
                        resizeMode='contain'
                    />
                    <Text style={styles.title}> 
                        Welcome Back 👋
                    </Text>
                    <Text style={styles.title}>
                         to <Text style={styles.titleColored}>PLANT</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                        Hello there, login to continue
                    </Text>
                </View>

                <View style={styles.input}>

                </View>

            </ScrollView>
        </View>
    );
}
 
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
    },
    header: {
        width: width,
        height: height * 0.30,
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderColor: 'blue',
        borderWidth: 1,
    },
    logo: {
        width: 105,
        height: 105,
        marginVertical: 25,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Poppins_700Bold',
    },
    titleColored: {
        color: '#4b8e4b',
    },
    subtitle: {
        color: '#9aa09a',
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        marginVertical: 10,
    },
    input: {
        width: width,
        height: height * 0.30,
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderColor: 'green',
        borderWidth: 1,

    },
  });