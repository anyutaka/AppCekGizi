import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    checkToken();
  }, []);
  const checkToken = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');

      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        const {userToken, expirationTime} = userData;

        if (userToken && expirationTime) {
          const currentTime = new Date().getTime();

          if (currentTime <= expirationTime) {
            setTimeout(() => {
              navigation.replace('MainApp');
            }, 1500);
          } else {
            setTimeout(() => {
              navigation.replace('Login');
            }, 1500);
          }
        } else {
          setTimeout(() => {
            navigation.replace('Login');
          }, 1500);
        }
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      }
    } catch (error) {
      console.error('Error retrieving token data:', error);
      setTimeout(() => {
        navigation.replace('Login');
      }, 1500);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GizNow</Text>
      <Text style={styles.logo2}>we keepin' ur health</Text>
      <View style={styles.infoContainer}>
        <Text style={[styles.info]}>Presented By</Text>
        <Text style={[styles.info, {textAlign: 'center'}]}>Park Yutaka</Text>
        <Text style={[styles.info, {textAlign: 'center'}]}>Brainteritory</Text>
      </View>
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DC08B',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4c827e',
    alignSelf: 'center',
  },
  logo2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4c827e',
    alignSelf: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
  },
  info: {
    fontSize: 12,
    color: '#4c827e',
  },
});