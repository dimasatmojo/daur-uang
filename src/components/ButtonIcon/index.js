import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconTukarPoin, IconTransaksi, IconLokasi, IconEkspress, IconKarpet, IconKiloan, IconSatuan, IconSetrika, IconVip } from '../../assets'
import { ColorSecondary } from '../../utils/constant'

const ButtonIcon = ({ title, type }) => {

    const Icon = () => {
        if (title === "Tukar Poin") return <IconTukarPoin />

        if (title === "Transaksi") return <IconTransaksi />

        if (title === "Lokasi") return <IconLokasi />

        if (title === "Kiloan") return <IconKiloan />

        if (title === "Satuan") return <IconSatuan />

        if (title === "Setrika") return <IconSetrika />

        if (title === "VIP") return <IconVip />

        if (title === "Karpet") return <IconKarpet />

        if (title === "Ekspress") return <IconEkspress />


        return <IconTukarPoin />
    }

    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.button(type)}>
                <Icon />
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: type === 'layanan' ? 12 : 0,
        marginRight: type === 'layanan' ? 30 : 0,
        marginLeft: type === 'layanan' ? 0 : 0,
        width: type === 'layanan' ? '20%' : '30%',
        paddingHorizontal : type === 'layanan' ? 0 : 15,

    }), 
    button: (type) => ({
      backgroundColor: type === 'layanan' ? ColorSecondary : '#FFF',
      padding: type === 'layanan' ? 12 : 8,
      borderRadius: 10,
      alignItems: "center",
    }),
    text: (type) => ({
      fontSize: type === 'layanan' ? 14 : 10,
      fontFamily:type === 'layanan' ? 'Montserrat-Light' : 'Montserrat-Regular',
      textAlign: 'center',
      marginTop: 5
    }),
  
  });