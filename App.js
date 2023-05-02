import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Dimensions, Text } from 'react-native';
import { OvoComponent } from './components/OvoComponent';

export default function App() {
  const { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    imageBanner: {
      height: 140,
      width: width
    },
    greetingText: {
      fontSize: 17,
      fontWeight: 'bold',
      position: 'absolute',
      alignSelf: 'center',
      top: 30,
      color: 'white'
    },
    wrapperOvo: {
      marginHorizontal: 18,
      height: 150,
      marginTop: -60,
      backgroundColor: 'white',
      elevation: 4,
      borderRadius: 10,
    },
    textOvo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 12,
      marginTop: 10,
    },
    divider: {
      height: .8,
      backgroundColor: '#adadad',
      marginTop: 10,
      marginHorizontal: 12,
    },
  });
  return (
    <View>
      <Image style={styles.imageBanner}
        source={require('./assets/images/awan.jpg')}
      />
      <StatusBar barStyle="default-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />

      <Text style={styles.greetingText}>
        Selamat Datang
      </Text>

      <View style={styles.wrapperOvo}>
        <View style={styles.textOvo}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#383838' }}>Ovo Balance</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#383838' }}> Rp. 100.000 </Text>
        </View>
        <View style={styles.divider}></View>
        <OvoComponent />
      </View>
    </View>
  );
}
