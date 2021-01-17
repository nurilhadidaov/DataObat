import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'
import InputData from '../../components/inputData'
import Firebase from '../../config/Firebase'

export default class tambahDataObat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            namaObat: '',
            jenisObat: '',
            satuan: '',
            harga: ''
        };
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value,
        });
    };

    onSubmit = () => {
        if (this.state.namaObat && this.state.jenisObat && this.state.satuan && this.state.harga) {
            const obatReferensi = Firebase.database().ref('Obat');
            const obat = {
                namaObat: this.state.namaObat,
                jenisObat: this.state.jenisObat,
                satuan: this.state.satuan,
                harga: this.state.harga
            }

            obatReferensi
                .push(obat)
                .then((data) => {
                    Alert.alert('Sukses', 'Data Obat Tersimpan');
                    this.props.navigation.replace('Home');
                })
                .catch((error) => {
                    console.log("Error : ", error);
                })

        } else {
            Alert.alert('Error', 'Nama Obat, Jenis Obat, Satuan, dan Harga wajib diisi');
        }

    };

    render() {
        return (
            <View style={styles.pages}>
                <InputData
                    label="Nama Obat"
                    placeholder="Masukkan Nama Obat"
                    onChangeText={this.onChangeText}
                    value={this.state.namaObat}
                    namaState="namaObat"
                />

                <InputData
                    label="Jenis Obat"
                    placeholder="obat bebas, obat bebas terbatas, obat keras, obat narkotika"
                    onChangeText={this.onChangeText}
                    value={this.state.jenisObat}
                    namaState="jenisObat"
                />

                <InputData
                    label="Satuan"
                    placeholder="Botol, Strips, Tablet, kapsul"
                    onChangeText={this.onChangeText}
                    value={this.state.satuan}
                    namaState="satuan"
                />

                <InputData
                    label="Harga"
                    placeholder="Harga"
                    keyboarType="number-pad"
                    onChangeText={this.onChangeText}
                    value={this.state.harga}
                    namaState="harga"
                />

                <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()} >
                    <Text style={styles.textTombol}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30,
    },
    tombol: {
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    textTombol: {
        color: 'black',
        fontWeight: 'build',
        textAlign: 'center',
        fontSize: 16,
    }
});