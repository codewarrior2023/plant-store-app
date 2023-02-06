import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('screen')

const Slide = ({item, scrollX}) => {

    const translateY = scrollX.interpolate({
        inputRange:[(item.id - 1) * width, item.id * width, (item.id + 1) * width],
        outputRange: [-60, 0, -60],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            <Animated.Image style={[styles.image, {
                transform:[{translateY: translateY}]
            }]}
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

export default Slide;

const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center', 
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