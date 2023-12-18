import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {ArrowLeft, AddSquare, Add} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';
import auth from '@react-native-firebase/auth';

const EditFood = ({route}) => {
  const authorId = auth().currentUser.uid;
  const navigation = useNavigation();
  const {foodId} = route.params;
  const [dataFood, setDataFood] = useState({
    title: '',
    composition: '',
    description: '',
  });
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('food')
      .doc(foodId)
      .onSnapshot(documentSnapshot => {
        const dataFood = documentSnapshot.data();
        if (dataFood) {
          console.log('food data: ', dataFood);
          setDataFood({
            title: dataFood.title,
            composition: dataFood.composition,
            image,
            description: dataFood.description,
            createdAt: new Date(),
          });
          setOldImage(dataFood.image);
          setImage(dataFood.image);
          setLoading(false);
        } else {
          console.log(`food with ID ${foodId} not found.`);
        }
      });
    setLoading(false);
    return () => subscriber();
  }, [foodId]);

  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = (key, value) => {
    setDataFood({
      ...dataFood,
      [key]: value,
    });
  };

  const handleUpdate = async () => {
    setLoading(true);
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`foodimages/${filename}`);
    try {
      if (image !== oldImage && oldImage) {
        const oldImageRef = storage().refFromURL(oldImage);
        await oldImageRef.delete();
      }
      if (image !== oldImage) {
        await reference.putFile(image);
      }
      const url =
        image !== oldImage ? await reference.getDownloadURL() : oldImage;
      await firestore().collection('food').doc(foodId).update({
        title: dataFood.title,
        composition: dataFood.composition,
        image: url,
        description: dataFood.description,
      });
      setLoading(false);
      console.log('food Updated!');
      navigation.navigate('DetailFood', {foodId});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <ArrowLeft
              color={'white'}
              alignItems="center"
              variant="Broken"
              size={25}
            />
          </TouchableOpacity>
        </View>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          Food Form Report
        </Text>
        <View>
          <Text> </Text>
        </View>
      </View>
      <ScrollView>
        <View style={form.container}>
          <View style={form.titleBox}>
            <TextInput
              style={form.TextInput}
              placeholder="Title"
              value={dataFood.title}
              onChangeText={text => handleChange('title', text)}
              placeholderTextColor={'#000'}
              multiline
            />
          </View>
          <View style={form.CompositionBox}>
            <TextInput
              style={form.TextInput}
              value={dataFood.composition}
              onChangeText={text => handleChange('composition', text)}
              placeholder="Composition"
              placeholderTextColor={'#000'}
              multiline
            />
          </View>
          {image ? (
            <View style={{position: 'relative'}}>
              <FastImage
                style={{width: '100%', height: 127, borderRadius: 5}}
                source={{
                  uri: image,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  backgroundColor: 'green',
                  borderRadius: 25,
                }}
                onPress={() => setImage(null)}>
                <Add
                  size={20}
                  variant="Linear"
                  color="white"
                  style={{transform: [{rotate: '45deg'}]}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={handleImagePick}>
              <View
                style={[
                  styles.borderDashed,
                  {
                    gap: 10,
                    paddingVertical: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <AddSquare color="grey" variant="Linear" size={42} />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'grey',
                  }}>
                  Edit Image
                </Text>
              </View>
            </TouchableOpacity>
          )}
          <View style={form.descriptionBox}>
            <TextInput
              style={form.TextInput}
              placeholder="Description"
              value={dataFood.description}
              onChangeText={text => handleChange('description', text)}
              placeholderTextColor={'#000'}
              multiline
            />
          </View>
          <TouchableOpacity style={form.btnUpdate} onPress={handleUpdate}>
            <Text style={form.textBtn}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default EditFood;
//////////////////////////////////////////////////////// CSS ////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'grey',
  },
});
const form = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  titleBox: {
    backgroundColor: '#9DC08B',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  CompositionBox: {
    marginTop: 5,
    backgroundColor: '#9DC08B',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  imageBox: {
    marginTop: 5,
    backgroundColor: '#9DC08B',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  descriptionBox: {
    marginTop: 5,
    backgroundColor: '#9DC08B',
    height: 430,
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  btnUpdate: {
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
    width: '100%',
    backgroundColor: '#004D47',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textBtn: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
  },
  TextInput: {
    color: '#000',
    fontSize: 16,
  },
});
