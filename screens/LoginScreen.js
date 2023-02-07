import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PrimaryInput from '../components/PrimaryInput';
import SecondaryInput from '../components/SecondaryInput';
import PrimaryButton from '../components/PrimaryButton';

const { width, height } = Dimensions.get('screen');

const LoginScreen = () => {
    return (  
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 30,
                }} 
            >
                <View style={styles.header}> 
                    <Image style={styles.header_logo}
                        source={require('../assets/logo.png')}
                        resizeMode='contain'
                    />
                    <Text style={styles.header_title}> 
                        Welcome Back 👋
                    </Text>
                    <Text style={styles.header_title}>
                         to <Text style={styles.header_title$colored}>PLANT</Text>
                    </Text>
                    <Text style={styles.header_subtitle$light}>
                        Hello there, login to continue
                    </Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.content_inputs}>
                        <PrimaryInput 
                            label="Email Address"
                            placeholder="Enter your email address"
                        />
                        <SecondaryInput 
                            label="Password"
                            placeholder="Enter your password"
                        />
                    </View>
                    
                    <TouchableOpacity style={styles.content_forgotpassword} activeOpacity={0.4}> 
                        <Text style={styles.content_subtitle$colored}>
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.content_buttons}>
                        <PrimaryButton text="Login"/>
                    </View> 
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footer_subtitle$light}>
                        Or continue with social account
                    </Text>

                    <View style={styles.footer_buttons}>
                        <TouchableOpacity style={styles.footer_buttons$wrapper} activeOpacity={0.4}>
                            <Image style={styles.footer_image}
                                source={require('../assets/google.png')}
                                resizeMode='contain'
                            />
                            <Text style={styles.footer_subtitle}>
                                Google
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.footer_buttons$wrapper} activeOpacity={0.4}>
                            <Image style={styles.footer_image}
                                source={require('../assets/facebook.png')}
                                resizeMode='contain'
                            />
                            <Text style={styles.footer_subtitle}>
                                Facebook
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer_account}>
                        <Text style={styles.footer_subtitle}>
                            Dont have an account yet? 
                        </Text>
                        <TouchableOpacity activeOpacity={0.4}> 
                            <Text style={styles.footer_subtitle$colored}> Signup </Text>
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header_logo: {
        width: 105,
        height: 105,
        marginBottom: 25,
    },
    header_title: {
        fontSize: 28,
        fontFamily: 'Poppins_700Bold',
    },
    header_title$colored: {
        color: '#4b8e4b',
    },
    header_subtitle$light: {
        color: '#9aa09a',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        marginVertical: 10,
    },
    content: {
        width: width,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    content_inputs: {
        alignItems: 'center',
        marginVertical: 10,
    },
    content_forgotpassword: {
        alignItems: 'flex-end',
    },
    content_subtitle$colored: {
        color: '#4b8e4b',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
    },
    content_buttons: {
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 5,
    },
    footer: {
       width: width,
       alignItems: 'center',
    },
    footer_subtitle$light: {
        color: '#9aa09a',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        marginVertical: 5,
    },
    footer_subtitle: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        marginVertical: 5,
    },
    footer_buttons: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 50,
    },
    footer_buttons$wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 55,
        borderColor: '#ebeceb',
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    footer_image:{
        width: 20,
        height: 20,
        marginRight: 10,
    },
    footer_subtitle$colored: {
        color: '#4b8e4b',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
    },
    footer_account: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
  });