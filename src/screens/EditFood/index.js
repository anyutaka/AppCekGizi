import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const EditFood = ({route}) => {
    const navigation = useNavigation();
    const { foodId } = route.params;
    const [dataFood, setDataFood] = useState({
      title: "",
      composition: "",
      description: "",
    });
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getfoodId();
    }, [foodId]);
  
    const getfoodId = async () => {
      try {
        const response = await axios.get(
        `https://6572a037d61ba6fcc01545d7.mockapi.io/food/${foodId}`,
        );
        setDataFood({
          title: response.data.title,
          composition: response.data.composition,
          description: response.data.description,
        });
  
        setImage(response.data.image);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleChange = (key, value) => {
      setDataFood({
        ...dataFood,
        [key]: value,
      });
    };
  
    const handleUpdate = async () => {
      setLoading(true);
      try {
        await axios.put(`https://6572a037d61ba6fcc01545d7.mockapi.io/food/${foodId}`,
          {
            title: dataFood.title,
            composition: dataFood.composition,
            description: dataFood.description,
            image: image,
          }
        );
  
        setLoading(false);
        navigation.navigate("HomeScreen");
      } catch (e) {
        console.log(e);
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
            <TextInput style={form.TextInput}
              placeholder="Title"
              value={dataFood.title}
              onChangeText={(text) => handleChange("title", text)}
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.CompositionBox}>
            <TextInput style={form.TextInput}
              value={dataFood.composition}
              onChangeText={(text) => handleChange("composition", text)}
              placeholder="Composition"
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.imageBox}>
            <TextInput style={form.TextInput}
              placeholder="Image"
              value={image}
              onChangeText={text => setImage(text)}
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.descriptionBox}>
            <TextInput style={form.TextInput}
              placeholder="Description"
              value={dataFood.description}
              onChangeText={(text) => handleChange("description", text)}
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <TouchableOpacity style= {form.btnUpdate} onPress={handleUpdate}>
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
      height: 500,
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
      color: "#fff",
      alignSelf: 'center',
    },
    TextInput:{
        color: "#000",
        fontSize:16,
    }
  });