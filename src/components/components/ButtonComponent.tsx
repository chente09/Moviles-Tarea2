import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR } from '../../commons/constantsColor';


interface ButtonProps{
    title:string;
    onPress:()=>void;
}
export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonConatiner}
    onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    buttonConatiner:{
        backgroundColor:PRIMARY_COLOR,
        paddingVertical:15,
        borderRadius:10
    },
    buttonText:{
        marginHorizontal:20,
        color:'#87fffd',
        fontSize:25,
        fontWeight:'bold'
    }
})
