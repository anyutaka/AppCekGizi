import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ArrowLeft, More} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import ActionSheet from 'react-native-actions-sheet';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const DetailFood = ({route}) => {
  const navigation = useNavigation();
  const {foodId} = route.params;
  const [loading, setLoading] = useState(true);
  const [DataFood, setDataFood] = useState(null);
  const actionSheetRef = useRef(null);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useEffect(() => {
    getfoodId();
  }, [foodId]);

  const getfoodId = async () => {
    try {
      const response = await axios.get(
        `https://6572a037d61ba6fcc01545d7.mockapi.io/food/${foodId}`,
      );
      setDataFood(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateEdit = () => {
    closeActionSheet();
    navigation.navigate('EditFood', {foodId});
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://6572a037d61ba6fcc01545d7.mockapi.io/food/${foodId}`,
      );
      closeActionSheet();
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}>
          <ArrowLeft color={'white'} alignItems="center" variant="Broken" size={25} />
        </TouchableOpacity>
        <View>
          <Text style={styles.textDetail}>Food Detail</Text>
        </View>
        <View style={styles.notifIcon}>
          <TouchableOpacity
            onPress={openActionSheet}>
            <More size={25} color="white" variant="Broken" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textFood}>
        <Text style={styles.titleText}>{DataFood?.title}</Text>
      </View>
      <View style={styles.pictureD}>
        <FastImage source={{uri: DataFood?.image}} style={styles.pictureB} />
      </View>
      <View style={styles.textFood}>
        <Text style={styles.detailText}>Composition</Text>
        <Text style={styles.detailText2}>{DataFood?.composition}</Text>
        <Text style={styles.detailText}>Description</Text>
        <Text style={styles.detailText2}>{DataFood?.description}</Text>
      </View>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  textDetail: {
    fontSize: 23,
    color:"white",
  },
  notifIcon: {
    marginRight: 1,
  },
  pictureB: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    width: 120,
    height: 125,
  },
  textFood: {
    marginHorizontal: 15,
    alignItems: 'flex-start',
  },
  detailText: {
    fontSize: 20,
    fontWeight:'bold',
    color: 'black',
    marginVertical: 5,
  },
  detailText2: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
  titleText: {
    fontSize: 25,
    fontWeight:'bold',
    color: 'black',
    marginVertical: 5,
  },
  pictureD: {
    margin: 10,
    alignContent:'center',
  },
});

export default DetailFood;
