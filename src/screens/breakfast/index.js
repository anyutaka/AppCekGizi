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
});
