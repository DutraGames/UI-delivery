import React from 'react';
import { Text, View, Image} from 'react-native'
import Styles from './Styles'

export default function Cupons({img}) {
  return (
    <View style={Styles.container}>
        <View>
            <Image source={img} style={Styles.img}/>
        </View>      
    </View>
  )
}


