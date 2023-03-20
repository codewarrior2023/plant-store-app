import { Animated, Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRef } from 'react';
import Slide from '../components/Slide';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const GREETING_DATA = [
    {
        id: 0,
        image: require('../assets/peace-lily-plant.png'),
        title: 'The best collection of' ,
        titleColored: 'indoor & outdoor plants',
        subtitle: 'We have a collection of the finest plants, each selected for their beauty and vitality.'
    },
    {
        id: 1,
        image: require('../assets/calathea-medallion-plant.png'),
        title: 'Keep all of your plants',
        titleColored: 'alive, healthy, & strong',
        subtitle: 'We ensure the longevity of your plants by providing them the very best of care.'
    },
    {
        id: 2,
        image: require('../assets/monstera-deliciosa-plant.png'),
        title: 'Plant a tree & together',
        titleColored: ' lets green up the earth',
        subtitle: 'Planting a tree helps our environment and creates a much cleaner atmosphere.'
    },
];

const { width, height } = Dimensions.get('screen');

const WelcomeScreen = () => {

    const scrollX = useRef(new Animated.Value(0)).current;

    return (
    <View style={styles.container}>

            <View style={styles.slides}>
                <FlatList 
                    data={GREETING_DATA}
                    renderItem={({item}) => <Slide item={item} scrollX={scrollX}/>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    snapToAlignment="center"
                    scrollEventThrottle={10}
                    onScroll={Animated.event ([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX,
                                },
                            },
                        },
                    ], {useNativeDriver: false}
                    )}
                />

                <View style={styles.pagination}>
                    {GREETING_DATA.map((_, index) => {

                        const backgroundColor = scrollX.interpolate({
                            inputRange:[(index - 1) * width, index * width, (index + 1) * width],
                            outputRange: ['#e0e6e0','#4b8e4b', '#e0e6e0'],
                            extrapolate: 'clamp',
                        });

                        return (
                            <Animated.View 
                                style={[styles.dot, { backgroundColor: backgroundColor }]} 
                                key={index}
                            /> 
                        );
                    })}
                </View>
            </View>

            <View style={styles.buttons}>
                <PrimaryButton text="Sign Up"/>
                <SecondaryButton text="Log In"/>
            </View>
        
    </View>
    
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  slides: {
    height: "75%",
    width: width,
    //backgroundColor: 'red',
  },
  pagination: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
  },
  dot: {
    backgroundColor: '#e0e6e0',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  buttons: {
    width: width,
    height: "25%",
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  }
});



/*
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 30,
            }} 
        >

        </ScrollView> 


*/