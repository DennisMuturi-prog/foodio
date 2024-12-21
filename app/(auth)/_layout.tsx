import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='login' options={{headerShown:true}}/>
      <Stack.Screen name='signup' options={{headerShown:true}}/>
      <Stack.Screen name='Image_classifier' options={{headerShown:true}}/>
    </Stack>
  )
  
}

export default AuthLayout