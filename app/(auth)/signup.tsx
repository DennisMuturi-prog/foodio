import { View, Text } from 'react-native'
import React from 'react'
import { useTensorflowModel } from 'react-native-fast-tflite'
import { useCameraDevice,Camera } from 'react-native-vision-camera'

const Signup = () => {
  const device = useCameraDevice('back')
  // if (device == null) return <NoCameraErrorView />

  return (
    <></>
    

  )
}

export default Signup