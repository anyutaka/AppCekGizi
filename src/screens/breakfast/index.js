import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import {ArrowLeft,} from 'iconsax-react-native';
import { foodList } from '../../../data.js';
import {useNavigation} from '@react-navigation/native';

const BFscreen = () => {
  const [currentScreen, setCurrentScreen] = useState('breakfast');
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const renderFoodDetails = () => {
    if (selectedFood) {
      return (
        <View style={styles.MidPic}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 24 }}>{selectedFood.title}</Text>
          <Text style={{ color: 'black' }}>Kalori: {selectedFood.kalori}</Text>
          <Text style={{ color: 'black' }}>Lemak: {selectedFood.lemak}</Text>
          <Text style={{ color: 'black' }}>Karb.: {selectedFood.karbohidrat}</Text>
          <Text style={{ color: 'black' }}>Protein: {selectedFood.protein}</Text>
          <Text style={{ color: 'black' }}>Berat: {selectedFood.berat}</Text>
        </View>
      );
    }
    return null;
  };

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {currentScreen === 'breakfast' && (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <ArrowLeft color={'white'} alignItems="center" variant="Broken" size={25} />
            </TouchableOpacity>
          </View>
        )}

        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Food of the Day</Text>
        <View>
          <Text>         </Text>
        </View>
      </View>
      <ScrollView style={styles.containerMid}>
        {foodList.map((food) => (
          <TouchableOpacity key={food.id} onPress={() => navigation.navigate('stackScreen')}>
            <View style={styles.MidPic}>
              <Text style={{ textAlign: 'center', color: 'black', fontSize: 24 }}>{food.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {renderFoodDetails()}
    </View>
  );
};
export default BFscreen;
//////////////////////////////////////////////////////// CSS ////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9C4C9',
  },
  containerMid: {
    height: 500,
    paddingVertical:15,
    marginBottom: 1,
    marginTop: -6,
  },
  header: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004D47',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
  },
  footer: {
    paddingHorizontal: 9,
    paddingVertical: 19,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    backgroundColor: '#004D47',
    height: 70,
    margin: 12,
    marginBottom: -1,
    marginHorizontal: 0,
  },
  searchBar: {
    paddingHorizontal: 1,
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    marginHorizontal: 5,
    margin: 13,
    padding: 10,
    borderRadius: 30,
  },
  columnContainerM: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor:'red',
  },
  columnContainerF: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    height: 125,
    marginTop: -4,
    marginHorizontal: 5,
    marginBottom: 15,
    padding: 0,
    borderRadius: 10,
  },
  MidPic: {
    width: 400,
    height: 131,
    paddingHorizontal:8,
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  large: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#128777',
  },
  circle: {
    width: 66,
    height: 61,
    marginBottom: -10,
    marginRight: 10,
    backgroundColor: '#FCF9C6',
    color: '#FCF9C6',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    width: 88,
    height: 61,
    // backgroundColor: '#F1F1F1',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonBack: {
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    justifyContent: 'center',
    color: 'black',
  },
});
