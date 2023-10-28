import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  ChartCircle,
  Weight,
  UserTick,
  ChemicalGlass,
  Profile2User,
  Devices,
} from 'iconsax-react-native';

const IconWithText = ({icon, text}) => (
  <View style={styles.iconContainer}>
    {icon}
    <Text style={styles.sectionTitle}>{text}</Text>
  </View>
);

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('./../../pic/p.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Andi Naufal Yutaka</Text>
          <Text style={styles.profileDate}>21 August 2002</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.profileDetails}>
        <IconWithText
          icon={<ChartCircle color={'white'} variant="Broken" size={25} />}
          text="Goals"
        />

        <IconWithText
          icon={<ChemicalGlass color={'white'} variant="Broken" size={25} />}
          text="Nutrition"
        />

        <IconWithText
          icon={<Weight color={'white'} variant="Broken" size={25} />}
          text="Fitness"
        />

        <IconWithText
          icon={<UserTick color={'white'} variant="Broken" size={25} />}
          text="Virtual PT"
        />

        <IconWithText
          icon={<Profile2User color={'white'} variant="Broken" size={25} />}
          text="Community"
        />

        <IconWithText
          icon={<Devices color={'white'} variant="Broken" size={25} />}
          text="App & Device"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#004D47',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flexDirection: 'column',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileDate: {
    fontSize: 16,
    color: 'gray',
  },
  profileDetails: {
    marginTop: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    marginVertical: 10,
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
});

export default ProfileScreen;