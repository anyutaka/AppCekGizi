import React, {useState} from 'react';
import SettingScreen from '../setting/SettingScreen';
import {View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import {
  NotificationBing,
  Home3,
  HambergerMenu,
  SearchNormal,
  User,
  Setting2,
  Activity,
} from 'iconsax-react-native';

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

function ImageComponent({text}) {
  return (
    <View style={styles.MidPic}>
      <Text
        style={{
          textAlign: 'center',
          textAlignVertical: 'center',
          justifyContent: 'center',
          color: 'black',
          fontSize: 24,
        }}>
        {text}
      </Text>
    </View>
  );
}

function ColumnContainer({data}) {
  return (
    <View style={styles.columnContainer}>
      {data.map((text, index) => (
        <ImageComponent key={index.toString()} text={text} />
      ))}
    </View>
  );
}

const HomeScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const openSettingScreen = () => {
    setCurrentScreen('Setting');
  };

  const circleProps = {
    circleColor: '#9DC08B',
    circleSize: 66,
  };
  const [imageData, setImageData] = useState([
    ['Gambar sayur 1', 'Gambar sayur 3'],
    ['Gambar sayur 2', 'Gambar sayur 4'],
    ['Gambar sayur 5', 'Gambar sayur 7'],
    ['Gambar sayur 6', 'Gambar sayur 8'],
    ['Gambar sayur 9', 'Gambar sayur 10'],
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {currentScreen === 'Home' && (
          <View>
            <Setting2
              color={'white'}
              alignItems="center"
              variant="Broken"
              size={25}
              onPress={openSettingScreen}
            />
          </View>
        )}

        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          GizNow
        </Text>

        {currentScreen === 'Setting' && (
          <SettingScreen setCurrentScreen={setCurrentScreen} />
        )}
        <View>
          <User
            color={'white'}
            alignItems="center"
            variant="Broken"
            size={25}
          />
        </View>
      </View>

      {/* <Button style={styles.ButtonBack} title="Kembali ke Home" onPress={() => setCurrentScreen('Home')}/> */}

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
        {imageData.map((data, index) => (
          <ColumnContainer key={index.toString()} data={data} />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.columnContainer}>
          <View style={styles.total}>
            <Home3
              color={'white'}
              variant="Broken"
              size={25}
              style={{opacity: 0.9, marginHorizontal: '-34%'}}
            />
            <Text style={{color: 'white', fontSize: 20, bottom: 1}}>Home</Text>
          </View>
          <View style={styles.total}>
            <NotificationBing
              color={'white'}
              variant="Broken"
              size={25}
              style={{opacity: 0.9, marginHorizontal: '-34%'}}
            />
            <Text style={{color: 'white', fontSize: 20, bottom: 1}}>Notif</Text>
          </View>
          <View style={styles.total}>
            <Activity
              color={'white'}
              variant="Broken"
              size={25}
              style={{opacity: 0.9, marginHorizontal: '-34%'}}
            />
            <Text style={{color: 'white', fontSize: 20, bottom: 1}}>
              Activity
            </Text>
          </View>
          <View style={styles.total}>
            <HambergerMenu
              color={'white'}
              variant="Broken"
              size={25}
              style={{opacity: 0.9, marginHorizontal: '-34%'}}
            />
            <Text style={{color: 'white', fontSize: 20, bottom: 1}}>menu</Text>
          </View>
        </View>
      </View>
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
    //backgroundColor: '#B9C4C9',
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
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: Colors.white(0.5),
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
    width: 195,
    height: 118,
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
