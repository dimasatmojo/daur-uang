import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconAddSaldo, IconGetPoint, IconEkspress, IconKarpet, IconKiloan, IconSatuan, IconSetrika, IconVip } from '../../assets'
import { ColorSecondary } from '../../utils/constant'

const ButtonIcon = ({ title, type }) => {

    const Icon = () => {
        if (title === "Add Saldo") return <IconAddSaldo />

        if (title === "Get Point") return <IconGetPoint />

        if (title === "Kiloan") return <IconKiloan />

        if (title === "Satuan") return <IconSatuan />

        if (title === "Setrika") return <IconSetrika />

        if (title === "VIP") return <IconVip />

        if (title === "Karpet") return <IconKarpet />

        if (title === "Ekspress") return <IconEkspress />


        return <IconAddSaldo />
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
        marginBottom : type === "layanan" ? 12 : 0,
        marginRight : type === "layanan" ? 30 : 0
    }), 
    button: (type) => ({
      backgroundColor: ColorSecondary,
      padding: type === 'layanan' ? 12 : 7,
      borderRadius: 10,
    }),
    text: (type) => ({
      fontSize: type === 'layanan' ? 14 : 10,
      fontFamily:type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
      textAlign: 'center',
    }),
  
  });