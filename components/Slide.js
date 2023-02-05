import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('screen')

export default function Slide({item}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={item.image}
                resizeMode="contain"
            />
            <View style={styles.content}> 
                <Text style={styles.title}>
                    {item.title}
                    <Text style={styles.titleColored}> {item.titleColored} </Text>
                </Text>
                <Text style={styles.subtitle}>
                    {item.subtitle}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.60,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
    },
    image: {
        width: 375,
        height: 375,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center',
        width: 300,
        marginTop: 40,
    },
    titleColored: {
        color: '#4b8e4b',
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        width: 325,
        marginTop: 15,
    }
  });