import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const CardObat = ({ id, obatItem, navigation, removeObat }) => {
    return (
    <View>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailObat', { id: id })}>
            <View>
                <Text style={styles.namaObat}>{obatItem.namaObat}</Text>
                <Text style={styles.harga}>harga : {obatItem.harga}</Text>
            </View>

            <View styles={styles.icon}>
            <TouchableOpacity onPress={() => navigation.navigate('EditObat', { id: id })} >
                <Ionicons name="md-pencil-outline" color="yellow" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeObat(id)}>
                <Ionicons name="md-trash" color={'red'} size={25} /> 
                </TouchableOpacity>
            </View>        
        </TouchableOpacity>
        </View>

    )
}

export default CardObat;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    namaObat: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    harga: {
        fontSize: 12,
        color: 'gray',
    },
    icon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
