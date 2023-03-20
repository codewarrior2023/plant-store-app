import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('screen');

const SecondaryButton = ({text}) => {
    return( 
        <TouchableOpacity style={styles.button} activeOpacity={0.4}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default SecondaryButton;

const styles = StyleSheet.create({
    button: {
        width: "85%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4b8e4b',
        borderWidth: 2,
        borderRadius: 10,
    },
    text: {
        color: '#4b8e4b',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
    }
  });