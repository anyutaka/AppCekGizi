import React from 'react';
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

export default function App() {
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
        <ScrollView horizontal>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>1</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>2</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>3</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>4</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>5</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>6</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>7</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>8</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>9</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>10</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>11</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>12</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>13</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>14</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>15</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>16</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>17</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>18</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>19</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>20</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>21</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>22</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>23</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>24</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>25</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>26</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>27</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>28</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>29</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>30</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{color: 'white', fontSize: 30, bottom: 1}}>31</Text>
          </View>
        </ScrollView>
      </View>
      <ScrollView style={styles.containerMid}>
        <View style={styles.columnContainer}>
          {/* 1 */}
          <View style={styles.column}>
            <View style={styles.small}> 
            <Text style={{ textAlign:'center',textAlignVertical:'center',justifyContent:'center' , color: 'black', fontSize: 24 }}>Gambar sayur 1</Text>
            </View>
            <View style={styles.small}> 
            <Text style={{ textAlign:'center',textAlignVertical:'center',justifyContent:'center' , color: 'black', fontSize: 24 }}>Gambar sayur 3</Text>
            </View>
          </View>
          {/* 2 */}
          <View style={styles.column}>
            <View style={styles.small}> 
            <Text style={{ textAlign:'center',textAlignVertical:'center',justifyContent:'center' , color: 'black', fontSize: 24 }}>Gambar sayur 2</Text>
            </View>
            <View style={styles.small}> 
            <Text style={{ textAlign:'center',textAlignVertical:'center',justifyContent:'center' , color: 'black', fontSize: 24 }}>Gambar sayur 4</Text>
            </View>
          </View>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <View style={styles.small}> 
            <Text style={{ textAlign:'center',textAlignVertical:'center',justifyContent:'center' , color: 'black', fontSize: 24 }}>Gambar sayur 5</Text>
            </View>
            <View style={styles.small}> 
            <Text style={{ textAlign:'center',textAlignVertical:'center',justifyContent:'center' , color: 'black', fontSize: 24 }}>Gambar sayur 7</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.small}> 
            <Text style={{ textAlign:'center',textAlignVertical:'center',justifyContent:'center' , color: 'black', fontSize: 24 }}>Gambar sayur 6</Text>
            </View>
            <View style={styles.small}> 
            <Text style={{ textAlign:'center',textAlignVertical:'center',justifyContent:'center' , color: 'black', fontSize: 24 }}>Gambar sayur 8</Text>
            </View>
          </View>
        </View>
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
    paddingVertical: 19,
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
