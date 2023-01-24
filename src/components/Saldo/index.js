import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { ColorPrimary } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonAksi}>
                <ButtonIcon title='Tukar Poin' />
                <Gap width={10} />
                <ButtonIcon title='Transaksi' />
                <Gap width={10} />
                <ButtonIcon title='Lokasi' />
            </View>
        </View>
    )
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        marginTop: -windowHeight * 0.07,
        flexDirection: 'row',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labelSaldo: {
        fontSize: 20,
        fontFamily: 'Montserrat-Regular'
    },
    valueSaldo: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold'
    },
    labelPoint: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },
    valuePoint: {
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        color: ColorPrimary
    },
    buttonAksi: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center'
    }
})