import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image}  from 'react-native'
import Styles from './Styles'

import Promo from '../../components/Promo'
import Cupons from '../../components/Cupons'

export default function Home({navigation}) {
  return (
    <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
      <Text style={Styles.title}>Promoção</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Promo preco={8} lanche={'X-Burguer'} img={require('../../../assets/hamburguer.jpg')}/>
        <Promo preco={10} lanche={'X-Salada'} img={require('../../../assets/hamburguer2.jpg')}/>
        <Promo preco={6} lanche={'X-Egg'} img={require('../../../assets/hamburguer.jpg')}/>
        <Promo preco={15} lanche={'Big'} img={require('../../../assets/hamburguer2.jpg')}/>
        <Promo preco={15} lanche={'X-Duplo'} img={require('../../../assets/hamburguer.jpg')}/>
        <Promo preco={20} lanche={'X-Triplo'} img={require('../../../assets/hamburguer2.jpg')}/>
      </ScrollView>

      <Text style={Styles.title}>Cupons</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Cupons img={require('../../../assets/cupon.jpg')}/>
        <Cupons img={require('../../../assets/cupon2.jpg')}/>
        <Cupons img={require('../../../assets/cupon.jpg')}/>
        <Cupons img={require('../../../assets/cupon2.jpg')}/>
      </ScrollView>

      <Text style={Styles.title}>Sobre o Estabelecimento:</Text>
      <TouchableOpacity style={Styles.btn}
      onPress={() => navigation.navigate('Sobre')}
      >
        <Image style={Styles.btnimg} source={require('../../../assets/point4.jpg')}/>
      </TouchableOpacity>

    </ScrollView>
  )
}


