import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('screen');

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
        width: width - 40,
        height: 60,
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