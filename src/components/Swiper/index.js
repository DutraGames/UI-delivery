import React from 'react'
import { Image, Text, View } from 'react-native'
import Swiper from 'react-native-swiper';
import Styles from './Styles'

export default function Slider() {
  return (
    <Swiper 
    dotStyle={{
      backgroundColor: '#000',
      borderColor: '#000',
      borderWidth: 1,
      width: 10,
      height: 10,
      borderRadius: 10,
    }} activeDotColor="#fff"
    activeDotStyle={{
      borderColor: '#000',
      borderWidth: 1,
      width: 10,
      height: 10,
      borderRadius: 10,
    }}>

      <View style={Styles.slide}>
        <Image source={require('../../../assets/point.jpg')} style={{width: '100%', height: 400}}/>
      </View>

      <View style={Styles.slide}>
        <Image source={require('../../../assets/point2.jpg')} style={{width: '100%', height: 400, resizeMode: 'center'}}/>
      </View>

      <View style={Styles.slide}>
        <Image source={require('../../../assets/point3.jpg')} style={{width: '100%', height: 400}}/>
      </View>
    </Swiper>
  );
}