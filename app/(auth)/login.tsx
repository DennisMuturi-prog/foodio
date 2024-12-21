import { View, Text ,TextInput,TouchableOpacity, Alert} from 'react-native'

const Login = () => {
  return (
    <View className='h-screen-safe items-center justify-center'>
        <TextInput className='w-44 border border-r-slate-400 rounded-md mb-3' placeholder='enter your email'/>
        <TextInput className='w-44 border border-r-slate-400 rounded-md mb-3' placeholder='enter your password'/>
        <TouchableOpacity 
        className='bg-blue-400 w-44 h-10 rounded-md items-center justify-center'
        onPress={()=>{
            Alert.alert('hello you','where you going')
        }}
        ><Text className='text-2xl text-white'>Log in</Text>
        </TouchableOpacity>


      <Text>Login</Text>
    </View>
  )
}

export default Login