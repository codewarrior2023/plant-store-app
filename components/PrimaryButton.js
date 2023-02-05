import {StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function PrimaryButton({text}) {
    return( 
        <TouchableOpacity style={styles.button} activeOpacity={0.4}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4b8e4b',
        width: 360,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 18,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
    }
  });