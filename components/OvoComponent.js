import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export const OvoComponent = () => {
  const styles = StyleSheet.create({
    wrapperPay: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    ovoFeatureImages: {
      height: 45,
      width: 45,
      marginTop: 15,
      marginHorizontal: 18,
    }
  });
  return (
    <View style={styles.wrapperPay}>
      <View>
        <Image source={require('../assets/icon/pay.jpg')} style={styles.ovoFeatureImages} />
        <Text style={{ alignSelf: 'center' }}>Pay</Text>
      </View>
      <View>
        <Image source={require('../assets/icon/topup.jpg')} style={styles.ovoFeatureImages} />
        <Text style={{ alignSelf: 'center' }}>Pay</Text>
      </View>
      <View>
        <Image source={require('../assets/icon/reward.jpg')} style={styles.ovoFeatureImages} />
        <Text style={{ alignSelf: 'center' }}>Pay</Text>
      </View>
    </View>
  )
}