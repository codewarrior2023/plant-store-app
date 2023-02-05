import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Slide from '../components/Slide';

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

export default function WelcomeScreen() {

    return (
        <ScrollView style={styles.container}>
            <FlatList 
                data={GREETING_DATA}
                renderItem={({item}) => <Slide item={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                snapToAlignment="center"
            />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
});
