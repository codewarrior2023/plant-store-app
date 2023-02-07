import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const { width, height } = Dimensions.get('screen');

const PrimaryInput = ({label, placeholder}) => {
    return (  
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text> 
            <TextInput style={styles.input}
                secureTextEntry={false}
                placeholder={placeholder}
            />
        </View>
    );
}
 
export default PrimaryInput;

const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: 60,
        justifyContent: 'space-around',
        borderColor: '#4b8e4b',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 20,
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