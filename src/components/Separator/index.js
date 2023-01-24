import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorPrimary, ColorDisabled } from '../../utils/constant'

const Separator = () => {
  return (
    <View style={styles.lineStyle}/>
  )
}

export default Separator

const styles = StyleSheet.create({
    lineStyle:{
        borderWidth: 0.65,
        borderColor: ColorPrimary,
        marginTop: 5
   }
})