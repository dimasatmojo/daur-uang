import { StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import { InfoDefault } from '../../assets'
import React from 'react'

const InfoPromo = () => {
    return (
        <TouchableOpacity style={styles.container}>
          <Image source={ InfoDefault }></Image>
        </TouchableOpacity>
      );
}

export default InfoPromo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({})