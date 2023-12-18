import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ArrowLeft, AddSquare, Add} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const AddFood = () => {
  const authorId = auth().currentUser.uid;
  const navigation = useNavigation();
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

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`foodimages/${filename}`);

    setLoading(true);
    try {
      await reference.putFile(image);
      const url = await reference.getDownloadURL();
      await firestore().collection('food').add({
        title: dataFood.title,
        composition: dataFood.composition,
        image,
        description: dataFood.description,
        createdAt: new Date(),
        authorId,
      });
      setLoading(false);
      console.log('Food added!');
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };
  const [dataFood, setDataFood] = useState({
    title: '',
    composition: '',
    description: '',
  });
  const handleChange = (key, value) => {
    setDataFood({
      ...dataFood,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);

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
              <AddSquare color="black" variant="Linear" size={42} />
              <Text
                style={{
                  fontSize: 12,
                  color: "black",
                }}>
                Upload Image
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
        <TouchableOpacity style={form.btnUpload} onPress={handleUpload}>
                <Text style={form.textBtn}>Upload</Text>
              </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    
  );
};
export default AddFood;
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
  ButtonBack: {
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    justifyContent: 'center',
    color: 'black',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '10',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  btnUpload: {
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
  TextPic: {
    color: '#FFF',
    opacity: 0.5,
    fontSize: 16,
    alignSelf: 'center',
  },
});
