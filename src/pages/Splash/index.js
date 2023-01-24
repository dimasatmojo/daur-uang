import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Logo, SplashBackground } from '../../assets'

const Splash = ({ navigation }) => {

  // Effect dengan timer 3 detik untuk menampilkan splashscreen, kemudian diarahkan ke MainApp routes
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000)
  }, [navigation]);

  // Content dari halaman splashscreen yg terdiri dari background dan logo
  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  )
}

export default Splash

// CSS yg didefine untuk kebutuhan styling di halaman
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width:222,
    height:105
  }

})