import React, {useState, useCallback} from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, RefreshControl, Image, } from 'react-native';
import {SearchNormal, Edit} from 'iconsax-react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import axios from 'axios';

function Circle({number, circleColor, circleSize}) {
  return (
    <View
      style={[
        styles.circle,
        {backgroundColor: circleColor, width: circleSize, height: circleSize},
      ]}>
      <Text style={{color: 'white', fontSize: 30, bottom: 1}}>
        {String(number)}
      </Text>
    </View>
  );
}

function HorizontalScrollView({circleProps}) {
  return (
    <ScrollView horizontal>
      {[...Array(31).keys()].map(number => (
        <Circle key={number.toString()} number={number + 1} {...circleProps} />
      ))}
    </ScrollView>
  );
}

const FoodBox = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate('DetailFood', {foodId: item.id})}>
      <View style={styles.foodInfo}>
        <Image source={{uri: item.image}} style={styles.foodPic} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.composition}>{item.composition}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [foodData, setDataFood] = useState([]);
  const getDataFood = async () => {
    try {
      const response = await axios.get(
        'https://6572a037d61ba6fcc01545d7.mockapi.io/food',
      );
      setDataFood(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const navigation = useNavigation();

  const circleProps = {
    circleColor: '#9DC08B',
    circleSize: 66,
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataFood();
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataFood();
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          GizNow
        </Text>
      </View>
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => navigation.navigate('Search')}>
        <Text style={{color: 'black', left: 137, fontSize: 16}}>Search...</Text>
        <SearchNormal
          color={'black'}
          variant="Broken"
          size={25}
          style={{opacity: 0.9, marginHorizontal: '-34%'}}
        />
      </TouchableOpacity>

      <View style={styles.container2}>
        <Text
          style={{
            justifyContent: 'center',
            color: 'black',
            fontSize: 24,
            left: 5,
            bottom: 10,
          }}>
          Agustus
        </Text>
        <HorizontalScrollView circleProps={circleProps} />
      </View>

      <ScrollView
        style={styles.containerMid}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <ActivityIndicator size="large" color="#3557e1" />
        ) : (
          foodData.map((item, index) => <FoodBox key={index} item={item} />)
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.AddBtn}
        onPress={() => navigation.navigate('AddFood')}>
        <Edit color="#fff" variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
////////////////////////////// CSS //////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9C4C9',
  },
  containerMid: {
    height: 500,
    marginBottom: 1,
    marginTop: -6,
  },
  header: {
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004D47',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
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
  AddBtn: {
    backgroundColor: '#004D47',
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 15,
  },
  foodInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  foodPic: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    width: 120,
    height: 120,
  },
  textContainer: {
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  composition: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
});