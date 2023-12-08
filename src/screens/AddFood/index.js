import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const AddFood = () => {
  const navigation = useNavigation();
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
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.CompositionBox}>
            <TextInput style={form.TextInput}
              placeholder="Composition"
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.imageBox}>
            <TextInput style={form.TextInput}
              placeholder="Image"
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.descriptionBox}>
            <TextInput style={form.TextInput}
              placeholder="Description"
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <TouchableOpacity style={form.btnUpload}>
            <Text style={form.textBtn}>Upload</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default AddFood;
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
  ButtonBack: {
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    justifyContent: 'center',
    color: 'black',
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
      backgroundColor: '#d6fffc',
      height: 50,
      width: '100%',
      justifyContent: 'center',
      borderRadius: 10,
      paddingLeft: 10,
      marginVertical: 4,
    },
    CompositionBox: {
      marginTop: 5,
      backgroundColor: '#d6fffc',
      height: 50,
      width: '100%',
      justifyContent: 'center',
      borderRadius: 10,
      paddingLeft: 10,
      marginVertical: 4,
    },
    imageBox: {
      marginTop: 5,
      backgroundColor: '#d6fffc',
      height: 50,
      width: '100%',
      justifyContent: 'center',
      borderRadius: 10,
      paddingLeft: 10,
      marginVertical: 4,
    },
    descriptionBox: {
      marginTop: 5,
      backgroundColor: '#d6fffc',
      height: 500,
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