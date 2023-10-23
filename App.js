import React, { useState } from 'react';
import {View, StyleSheet, Text, ScrollView, ImageBackground} from 'react-native';
//import WallpaperImage from './src/wallpaper/wp.jpg';
import {
  Notification,
  Receipt21,
  Clock,
  HambergerMenu,
  SearchNormal,
  User,
} from 'iconsax-react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function Circle({ number, circleColor, circleSize }) {
  return (
    <View style={[styles.circle, { backgroundColor: circleColor, width: circleSize, height: circleSize }]}>
      <Text style={{ color: 'white', fontSize: 30, bottom: 1 }}>
        {String(number)}
      </Text>
    </View>
  );
}

function HorizontalScrollView({ circleProps }) {
  return (
    <ScrollView horizontal>
      {[...Array(31).keys()].map((number) => (
        <Circle key={number.toString()} number={number + 1} {...circleProps} />
      ))}
    </ScrollView>
  );
}

function ImageComponent({ text }) {
  return (
    <View style={styles.small}>
      <Text style={{ textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center', color: 'black', fontSize: 24 }}>
        {text}
      </Text>
    </View>
  );
}

function ColumnContainer({ data }) {
  return (
    <View style={styles.columnContainer}>
      {data.map((text, index) => (
        <ImageComponent key={index.toString()} text={text} />
      ))}
    </View>
  );
}

export default function App(props) {
  const circleProps = {
    circleColor: '#9DC08B',
    circleSize: 66,
  };
  const [imageData, setImageData] = useState([
    ['Gambar sayur 1', 'Gambar sayur 3'],
    ['Gambar sayur 2', 'Gambar sayur 4'],
    ['Gambar sayur 5', 'Gambar sayur 7'],
    ['Gambar sayur 6', 'Gambar sayur 8'],
  ]);
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={WallpaperImage} style={styles.wallpaper} /> */}
      <View style={styles.header}>
        <HambergerMenu
          color={'white'}
          alignItems="center"
          variant="Broken"
          size={25}
        />
        <User color={'white'} variant="Broken" size={25} />
        <Text style={{marginHorizontal: '0%'}}>Yutaka</Text>
      </View>

      <View style={styles.searchBar}>
        <Text style={{color: 'black', left: 137, fontSize: 16}}>Search...</Text>
        <SearchNormal
          color={'black'}
          variant="Broken"
          size={25}
          style={{opacity: 0.9, marginHorizontal: '-34%'}}
        />
      </View>

      <View style={styles.container2}>
        <Text
          style={{ justifyContent: 'center', color: 'black', fontSize: 24, left: 5, bottom: 10 }}>
          Agustus
        </Text>
        <HorizontalScrollView circleProps={circleProps} />
      </View>
      
      <ScrollView style={styles.containerMid}>
      {imageData.map((data, index) => (
        <ColumnContainer key={index.toString()} data={data} />
      ))}
    </ScrollView>

      <View style={styles.containerBot}>
        <Text
          style={{
            justifyContent: 'center',
            color: 'black',
            fontSize: 24,
            left: 5,
            bottom: 10,
          }}>
          Today
        </Text>
        <View style={styles.columnContainer}>
          <View style={styles.total}>
            <Text style={{color: 'white', fontSize: 20, bottom: 1}}>Protein</Text>
          </View>
          <View style={styles.total}>
            <Text style={{color: 'white', fontSize: 20, bottom: 1}}>Carbo</Text>
          </View>
          <View style={styles.total}>
            <Text style={{color: 'white', fontSize: 20, bottom: 1}}>Fat</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

//////////////////////////////////////////////////////// CSS ////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  // wallpaper: {
  //   flex: 1,
  //   resizeMode: 'repeat',
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  // },
  container: {
    flex: 1,
    backgroundColor: '#B9C4C9',
  },
  containerMid: {
    flex: 1,
    height: 500,
    marginHorizontal: 10,
    marginBottom:1,
    marginTop:-6,
    //backgroundColor: '#B9C4C9',
  },
  containerBot: {
    paddingHorizontal: 9,
    paddingVertical: 19,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    height: 130,
    marginHorizontal: 10,
    marginTop:9,
    marginBottom:5,
    margin: 13,
    padding: 0,
    borderRadius: 10,
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
  searchBar: {
    paddingHorizontal: 1,
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    marginHorizontal: 1,
    margin: 13,
    padding: 10,
    borderRadius: 30,
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: Colors.white(0.5),
  },
  container2: {
    paddingHorizontal: 9,
    paddingVertical: 15,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    height: 125,
    marginTop:-4,
    marginLeft:9,
    marginRight:14,
    marginBottom:15,
    margin: 13,
    padding: 0,
    borderRadius: 10,
  },
  container1: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    margin: 15,
    borderRadius: 10,
  },
  small: {
    width: 188,
    height: 140,
    marginBottom: 10,
    marginRight: 10,
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
    backgroundColor: '#9DC08B',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    width: 117,
    height: 61,
    marginBottom: -10,
    marginRight: 10,
    backgroundColor: '#A9B4B9',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
