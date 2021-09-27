import React from 'react'
import {ScrollView, Text, View } from 'react-native'
import Stars from 'react-native-stars'
import Styles from './Styles'

import {Ionicons} from '@expo/vector-icons'

import Swiper from '../../components/Swiper'
import Map from '../../components/Map/'


export default function About() {
  return (
   <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
     <View style={Styles.wapper}>
       <Swiper/>
       <Text style={Styles.avalia}>Avaliação:</Text>
       <View style={{alignItems: 'center', justifyContent: 'center' ,flexDirection: 'row'}}>
         <Stars
         default={4.5}
         count={5}
         half={true}
         starSize={20}
         fullStar={<Ionicons name="md-star" size={24} style={Styles.star} />}
         emptyStar={<Ionicons name="md-star-outline" size={24} style={Styles.star} />}
         halfStar={<Ionicons name="md-star-half" size={24} style={Styles.star} />}
         />
       </View>

     </View>
     <Text style={Styles.cab}>Cidade: <Text style={Styles.res}>Praia Grande</Text></Text>
     <Text style={Styles.cab}>End: <Text style={Styles.res}>Av. Osasco, 706</Text></Text>
     <Text style={Styles.cab}>Bairro: <Text style={Styles.res}>Vila Tupy</Text></Text>
     <Text style={Styles.cab}>CEP: <Text style={Styles.res}>11704-050</Text></Text>
     <Text style={Styles.cab}>Telefone: <Text style={Styles.res}>(13) 3395-0078</Text></Text>

     <Text style={Styles.mapa}>Mapa:</Text>
     <Map/>
   </ScrollView>
  );
}

