import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { ButtonComponent } from '../components/components/ButtonComponent'
import { stylesGlobal } from '../theme/appTheme'


interface Props extends StackScreenProps<any, any> { };

export const FormScreen = ({ navigation }: Props) => {

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState('');

  const handlerSendInfo = () => {
    if (numero2 === 0) {
      setResultado('Error: División por cero');
    } else if (isNaN(numero1) || isNaN(numero2)) {
      setResultado('Error: Indeterminación');
    } else {
      const division = numero1 / numero2;
      setResultado(`El resultado de la división es ${division}`);
    }
  }

  return (
    <View>
      <ButtonComponent title='◀ Volver a HOME' onPress={() => navigation.navigate('InitScrren')} />
      <View style={{ alignItems: 'center', height: '90%', justifyContent: 'space-evenly' }}>
        <Text style={stylesGlobal.textDescription}>Ingresa dos números</Text>
        <TextInput
          style={stylesGlobal.formNumer}
          placeholder='número'
          keyboardType='numeric'
          onChangeText={(numero: string) => setNumero1(parseInt(numero))} />
        <TextInput
          style={stylesGlobal.formNumer}
          placeholder='número'
          keyboardType='numeric'
          onChangeText={(numero: string) => setNumero2(parseInt(numero))} />
        <ButtonComponent title='DIVIDIR' onPress={handlerSendInfo} />
        <Text style={stylesGlobal.textDescription}>{resultado}</Text>
      </View>
    </View>
  )
}
