import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { IconSetoranDiproses } from '../../assets';
import { ColorPrimary, ColorWarning, ColorGrey } from '../../utils/constant';

const SetoranDiproses = ({ title, status, datetime, price }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconSetoranDiproses />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
      <View style={styles.text2}>
        <Text style={styles.datetime}>{datetime}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SetoranDiproses;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight * 0.02,
    alignItems: 'center'
  },
  text: {
    marginLeft: windowWidth * 0.02,
    width: '45%',
  },
  text2: {
    marginLeft: windowWidth * 0.02,
    textAlign: 'right',
    width: '35%',
  },
  price: {
    fontSize: 16,
    textAlign: 'right',
    fontFamily: 'Montserrat-Bold'
  },
  datetime: {
    fontSize: 10,
    textAlign: 'right',
    fontFamily: 'Montserrat-Light'
  },
  title: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular'
  },
  status: (status) => ({
    fontSize: 10,
    fontFamily: 'Montserrat-Bold',
    color: status === 'Menunggu Validasi' ? ColorPrimary : status === 'Diterima' ? ColorWarning : ColorGrey,
  })
});