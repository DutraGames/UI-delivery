import MapView, {Marker} from 'react-native-maps'
import React from "react"
import { View } from 'react-native'
import Styles from './Styles'

export default function Map() {

return(
    <View style={Styles.container}>
        <MapView 
        initialRegion={{
            latitude: -24.02224,
          longitude: -46.47083,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }} style={Styles.map}>
            <Marker coordinate={{
                latitude: -24.02224,
                longitude: -46.47083,
            }} title="Point do Gordo" description="Lanches gostosos e saborosos"/>
        </MapView>
    </View>
)
}