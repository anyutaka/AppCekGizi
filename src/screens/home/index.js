import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SearchNormal, Edit} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

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

function NutritionRow({label, value}) {
  return (
    <View style={styles.nutritionRow}>
      <Text style={styles.nutritionLabel}>{label}:</Text>
      <View style={styles.nutritionValueContainer}>
        <Text style={styles.nutritionText}>{value}</Text>
        <Text style={styles.nutritionUnit}>g</Text>
      </View>
    </View>
  );
}

function ImageComponent({id, text, nutritionData}) {
  return (
    <View style={styles.MidPic}>
      <TouchableOpacity
        onPress={() => console.log(`Image clicked with ID: ${id}`)}>
        <Text style={{textAlign: 'center', color: 'black', fontSize: 24}}>
          {text}
        </Text>
      </TouchableOpacity>
      {nutritionData ? (
        <View style={styles.nutritionInfo}>
          <NutritionRow label="Kalori" value={`${nutritionData.kalori}`} />
          <NutritionRow label="Lemak" value={`${nutritionData.lemak}`} />
          <NutritionRow label="Karb." value={`${nutritionData.karbohidrat}`} />
          <NutritionRow label="Protein" value={`${nutritionData.protein}`} />
        </View>
      ) : (
        <Text style={{textAlign: 'center', color: 'black', fontSize: 16}}>
          Anda belum menambahkan makanan
        </Text>
      )}
    </View>
  );
}

function ColumnContainer({data}) {
  return (
    <View style={styles.columnContainerM}>
      {data.map(item => (
        <ImageComponent key={item.id} id={item.id} text={item.text} />
      ))}
    </View>
  );
}

const HomeScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigation = useNavigation();

  const openSettingScreen = () => {
    setCurrentScreen('Setting');
  };

  const circleProps = {
    circleColor: '#9DC08B',
    circleSize: 66,
  };

  const [imageData, setImageData] = useState([
    {id: 1, text: 'Breakfast'},
    {id: 2, text: 'Lunch'},
    {id: 3, text: 'Dinner'},
    {id: 4, text: 'Snack'},
  ]);

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

      <ScrollView style={styles.containerMid}>
        <ColumnContainer data={imageData} />
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddFood')}>
        <Edit color="#fff" variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
//////////////////////////////////////////////////////// CSS ////////////////////////////////////////////////////////
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
  columnContainerM: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor:'red',
  },
  listFood: {
    paddingVertical: 10,
    gap: 10,
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
    height: 131, // Sesuaikan tinggi untuk menampung info nutrisi
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
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
  floatingButton: {
    backgroundColor:"#49c44f",
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor:"#49c44f",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
