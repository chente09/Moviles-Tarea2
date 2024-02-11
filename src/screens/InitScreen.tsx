import React from 'react'
import { Image, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { TittleComponents } from '../components/components/TittleComponents'
import { ButtonComponent } from '../components/components/ButtonComponent'

interface Props extends StackScreenProps<any, any> { };

export const InitScrren = ({ navigation }: Props) => {
  return (
    <View>
      <TittleComponents title='BIENVENIDO'/>
      <Image
        source={{
          uri: 'https://www.qualitydevs.com/wp-content/uploads/2021/03/Desarrollo-apps-moviles-1288x724.jpg',
          cache: 'only-if-cached',
        }}
        style={{ width: 630, height: 650 }}
      />
      <ButtonComponent title='Acceder a Form' onPress={() => navigation.navigate('FormScreen')}/>
    </View>
  )
}
