import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './app/navigation/AppNavigator'
import { View , Text, StyleSheet} from 'react-native'

export default function App() {
  return (
    <NavigationContainer>
        <AppNavigator/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})