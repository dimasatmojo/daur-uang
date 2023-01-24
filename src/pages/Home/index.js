import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, ViewComponent } from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from '../../assets'
import { Saldo, ButtonIcon, PesananAktif, Separator } from '../../components'
import { ColorGrey } from '../../utils/constant'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header} >
          <Image source={Logo} style={styles.logo}></Image>
          <View style={styles.greetings}>
            <Text style={styles.username}>Halo, Dimas Atmojo!</Text>
          </View>
          <Separator />
          <View style={styles.poin}>
            <Text style={styles.poinLabel}>Poin</Text>
            <Text style={styles.valuePoin}>Rp. 364.210</Text>
          </View>
          <View style={styles.totalInOut}>
            <View style={styles.totalOut}>
              <Text style={styles.labelOut}>Total Pencairan</Text>
              <Text style={styles.valueOut}>Rp. 364.210</Text>
            </View>
            <View style={styles.totalIn}>
              <Text style={styles.labelIn}>Total Setoran</Text>
              <Text style={styles.valueIn}>92 Kg</Text>
            </View>
          </View>

        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Daur info</Text>
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
          <Text style={styles.label}>Setoran diproses</Text>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
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
    height: windowHeight * 0.41,
    paddingHorizontal: 30,
    paddingTop: 20
  },
  logo: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.06,
    marginLeft: 'auto'
  },
  greetings: {
    marginTop: windowHeight * 0.03,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular'
  },
  username: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold'
  },
  poin: {
    marginTop: windowHeight * 0.03,
  },
  poinLabel: {
    fontSize: 10,
    fontFamily: 'Montserrat-Bold'
  },
  valuePoin: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold'
  },
  totalInOut: {
    marginTop: windowHeight * 0.03,
    flexDirection: 'row'
  },
  totalIn: {
    width: '50%',
  },
  labelIn: {
    fontSize: 8,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'right'
  },
  valueIn: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'right'
  },
  totalOut: {
    width: '50%',
  },
  labelOut: {
    fontSize: 8,
    fontFamily: 'Montserrat-Bold'
  },
  valueOut: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular'
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15
  },
  label: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold'
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