import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {fontType, colors} from '../../../src/theme';
import axios from 'axios';

const AddBlogPage = () => {
  const handleUpload = async () => {
    setLoading(true);
    try {
      await axios
        .post('https://657198ffd61ba6fcc0130cb5.mockapi.io/atrackapp/blog', {
          title: blogData.title,
          price: blogData.price,
          image,
          description: blogData.description,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('ProfilePage');
    } catch (e) {
      console.log(e);
    }
  };

  const [image, setImage] = useState(null);

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [blogData, setBlogData] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
  });

  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('ProfilePage')}>
        <ArrowLeft
          color={'#000000'}
          variant="Linear"
          size={24}
          style={{marginLeft: 10}}
        />
        <Text style={styles.headerText}>Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={form.container}>
          <View style={form.titleBox}>
            <TextInput
              placeholder="Title"
              value={blogData.title}
              onChangeText={text => handleChange('title', text)}
              multiline
            />
          </View>
          <View style={form.priceBox}>
            <TextInput
              placeholder="Price"
              value={blogData.price}
              onChangeText={text => handleChange('price', text)}
              multiline
            />
          </View>
          <View style={form.imageBox}>
            <TextInput
              placeholder="Image"
              value={image}
              onChangeText={text => setImage(text)}
              multiline
            />
          </View>
          <View style={form.descriptionBox}>
            <TextInput
              placeholder="Description"
              value={blogData.note}
              onChangeText={text => handleChange('description', text)}
              multiline
            />
          </View>
          <TouchableOpacity style={form.btnUpload} onPress={handleUpload}>
            <Text style={form.textBtn}>Upload</Text>
          </TouchableOpacity>
          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#2bbaae" />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    height: 50,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  headerText: {
    fontSize: 15,
    marginLeft: 10,
    fontFamily: fontType['Pps-SemiBold'],
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddBlogPage;

const form = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  titleBox: {
    backgroundColor: 'rgba(43, 186, 174, 0.2)',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  priceBox: {
    marginTop: 5,
    backgroundColor: 'rgba(43, 186, 174, 0.2)',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  imageBox: {
    marginTop: 5,
    backgroundColor: 'rgba(43, 186, 174, 0.2)',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  descriptionBox: {
    marginTop: 5,
    backgroundColor: 'rgba(43, 186, 174, 0.2)',
    height: 425,
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  btnUpload: {
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
    width: '100%',
    backgroundColor: '#2bbaae',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textBtn: {
    fontFamily: fontType['Pps-SemiBold'],
    fontSize: 16,
    color: colors.white(),
    alignSelf: 'center',
  },
});
