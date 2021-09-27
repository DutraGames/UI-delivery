import React from 'react';
import { Text, View, Image} from 'react-native'
import Styles from './Styles'

export default function Promo({preco, lanche, img}) {
  return (
    <View style={Styles.container}>
        <Text style={Styles.name}>{lanche}</Text>
        <View>
            <Image style={Styles.img} source={img}/>
        </View>
        <Text style={Styles.preco}>R$ {preco.toFixed(2)}</Text>
      
    </View>
  )
}


