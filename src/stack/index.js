import React from 'react';
import {ArrowLeft, HambergerMenu, Share} from 'iconsax-react-native';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function stackScreen() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerStart}>
          <TouchableOpacity onPress={() => navigation.navigate('BFscreen')}>
            <ArrowLeft
              variant="Broken"
              size={24}
              color="white"
              style={{marginLeft: 16}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerMid}>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 8,
          }}>
          Food of the Day
        </Text>
        <Text style={{color: 'black', marginTop: 8}}>
          Nikmati pengalaman kuliner yang menggoda dengan opsi makanan lezat dan
          bergizi kami. Penuh dengan kebaikan, hidangan ini adalah keseimbangan
          sempurna antara rasa dan kesehatan.
        </Text>

        <Text style={styles.textisi}>
          {'\n'}🍽️ Informasi Nutrisi:
          {'\n'}- Kalori: 100
          {'\n'}- Lemak: 5g
          {'\n'}- Protein: 10g
          {'\n'}- Berat: 50g
          {'\n\n\n'}🥦 Bahan-bahan:
          {'\n'}- Sayuran segar
          {'\n'}- Sumber protein rendah lemak
          {'\n'}- Karbohidrat berkualitas tinggi
          {'\n\n\n'}🍲 Persiapan:
          {'\n'}1. Mulailah dengan memilih sayuran segar yang tersedia.
          {'\n'}2. Gabungkan sumber protein rendah lemak untuk nilai nutrisi yang lebih tinggi.
          {'\n'}3. Seimbangkan hidangan dengan karbohidrat berkualitas tinggi.
          {'\n\n\n'}🔥 Instruksi Memasak:
          {'\n'}- Gunakan sedikit minyak masak sehat.
          {'\n'}- Hindari penggunaan garam dan gula secara berlebihan.
          {'\n'}- Pilih metode memasak seperti pemanggangan, pengukusan, atau pemanggangan untuk hasil yang lebih sehat.
          {'\n\n\n'}🌟 Nikmati Perjalanan Menuju Gaya Hidup Lebih Sehat!
          {'\n'}Hidangan lezat dan bergizi ini bukan hanya lezat untuk lidah
          Anda tetapi juga langkah menuju gaya hidup yang lebih sehat. Rasakan
          kepuasan menyehatkan tubuh Anda dengan nutrisi yang tepat sambil
          menikmati setiap suap.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9C4C9',
  },
  containerMid: {
    backgroundColor: '#EEE',
    paddingHorizontal: 8,
    height:800,
  },
  header: {
    flexDirection: 'row',
    height: 52,
    backgroundColor: '#004D47',
  },
  headerStart: {
    justifyContent: 'center',
    flex: 1,
  },
  headerEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  textColor: {
    color: '#000',
  },
  textisi: {
    color: 'black',
    fontSize: 17,
  },
});