import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, ViewComponent } from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from '../../assets'
import { Saldo, ButtonIcon, PesananAktif } from '../../components'
import { ColorGrey } from '../../utils/constant'
import {ScrollView} from 'react-native-gesture-handler'

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header} >
          <Image source={Logo} style={styles.logo}></Image>
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>Dimas Atmojo</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title='Kiloan' type='layanan' />
            <ButtonIcon title='Satuan' type='layanan' />
            <ButtonIcon title='VIP' type='layanan' />
            <ButtonIcon title='Karpet' type='layanan' />
            <ButtonIcon title='Setrika' type='layanan' />
            <ButtonIcon title='Ekspress' type='layanan' />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci"/>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06
  },
  hello: {
    marginTop: windowHeight * 0.03
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular'
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold'
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    flexWrap: 'wrap'
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: ColorGrey,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }

})