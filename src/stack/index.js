import React, {useRef} from 'react';
import {ArrowLeft} from 'iconsax-react-native';
import {StyleSheet, Text, View, ScrollView ,Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function StackScreen() {
    const navigation = useNavigation()
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
      inputRange: [0, 52],
      outputRange: [0, -52],
    });
    const bottomBarY = diffClampY.interpolate({
      inputRange: [0, 52],
      outputRange: [0, -52],
    });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {transform:[{translateY:headerY}]}]}>
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
      </Animated.View>
      <Animated.View style={[styles.bottomBar, {transform:[{translateY:bottomBarY}]}]}>
      <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 54,
          }}>
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
            {'\n\n\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius dolor in lectus ornare, quis sollicitudin erat facilisis. Nullam nec efficitur est, ac luctus felis. Donec dictum rutrum porta. Etiam aliquam convallis laoreet. Sed tristique non nisl vestibulum consectetur. Cras egestas, lacus a egestas dignissim, purus massa ullamcorper est, ut blandit metus tellus ac tortor. Vestibulum eleifend elit eu diam auctor laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

            {'\n\n\n'}Phasellus a orci sed ligula venenatis suscipit. Maecenas varius ante id placerat auctor. Maecenas id leo id odio ultrices aliquam. Maecenas vel vehicula massa, quis rhoncus lorem. Cras non nunc fringilla, ornare massa vitae, fermentum urna. Fusce eu sem ut velit interdum blandit. Ut tempor facilisis est ut finibus. Ut eu vestibulum arcu. Donec justo purus, rhoncus id dui in, dictum dictum ex. Quisque commodo, nisl quis sagittis consequat, turpis magna gravida purus, ac laoreet libero orci eu augue. Curabitur a posuere risus, in dapibus ligula. Phasellus volutpat ornare scelerisque. Curabitur tortor massa, consequat in nisl et, sagittis maximus metus. Curabitur sagittis sem non sodales tristique. Duis placerat a tortor id iaculis.
          </Text>
        </Animated.ScrollView>
      </Animated.View>
      
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
    flex:1,
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