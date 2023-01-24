import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAkun, IconAkunActive, IconHome, IconHomeActive, IconRiwayat, IconRiwayatActive } from '../../assets/icons'
import { ColorPrimary, ColorDisabled } from '../../utils/constant'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />

        if (label === 'Riwayat') return isFocused ? <IconRiwayatActive /> : <IconRiwayat />

        if (label === 'Akun') return isFocused ? <IconAkunActive /> : <IconAkun />

        return <IconHome />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon/>
            <Text style={styles.text({isFocused})}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isFocused) =>  ({
        fontSize: 13,
        color: isFocused ? ColorPrimary : ColorDisabled,
        marginTop: 8
    })
})