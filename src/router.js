import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()

import Home from './pages/Home'
import About from './pages/About'
import { BackHandler, ColorPropType } from 'react-native'

function Router(){
    return(
        <Stack.Navigator 
        screenOptions={{
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#f00' },
          }}>
            <Stack.Screen name="Delivery" component={Home} />
            <Stack.Screen name="Sobre" component={About}/>
        </Stack.Navigator>
    )
}

export default Router