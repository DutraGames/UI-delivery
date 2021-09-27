import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import Router from './src/router'
import { StatusBar } from 'expo-status-bar'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light"/>
      <Router/>
    </NavigationContainer>
  )
}