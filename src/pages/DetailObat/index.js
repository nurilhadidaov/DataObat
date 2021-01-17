import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Firebase from '../../config/Firebase'

export default class DetailObat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            obat: {}
        };
    }
    componentDidMount() {
        Firebase.database()
            .ref('Obat/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let ObatItem = { ...data };

                this.setState({
                    obat: ObatItem,
                });
            });
    }
    
    render() {
        const { obat } = this.state
        return (
            <View style={styles.pages}>
                <Text> Nama Obat : </Text>
                <Text style={styles.text}> {obat.namaObat} </Text>

                <Text> Jenis Obat : </Text>
                <Text style={styles.text}> {obat.jenisObat} </Text>

                <Text> Satuan : </Text>
                <Text style={styles.text}> {obat.satuan} </Text>

                <Text> Harga : </Text>
                <Text style={styles.text}> {obat.harga} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pages: {
        margin: 30,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});
