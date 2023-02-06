import {StyleSheet, Text, TouchableOpacity } from 'react-native'

const PrimaryButton = ({text}) => {
    return( 
        <TouchableOpacity style={styles.button} activeOpacity={0.4}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4b8e4b',
        width: 360,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
    }
  });