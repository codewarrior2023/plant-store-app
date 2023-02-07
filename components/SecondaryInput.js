import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const { width, height } = Dimensions.get('screen');

const SecondaryInput = ({label, placeholder}) => {
    const [passwordVisible, setPassWordVisible] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    return (  
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.label}>
                    {label}
                </Text> 
                <TextInput style={styles.input}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                
                />
            </View>
            
            <TouchableOpacity activeOpacity={0.4} onPress={() => {
                setPassWordVisible(!passwordVisible)
                setSecureTextEntry(!secureTextEntry)
            }}>
                <Image style={styles.image}
                    source={passwordVisible ? require('../assets/visible.png') : require('../assets/hidden.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    );
}
 
export default SecondaryInput;

const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#4b8e4b',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 20,
    }, 
    content: {
        height: '100%',
        width: width - 100,
        justifyContent: 'space-around',
    },
    label: {
        color: '#4b8e4b',
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
    }, 
    input:{
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'left',
    },
    image: {
        width: 30,
        height: 30,
    },
  });