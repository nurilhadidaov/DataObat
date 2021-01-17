import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Firebase from '../../config/Firebase';
import CardObat from '../../components/CardObat';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            obats: [],
            obatsKey: [],
        };
    }
    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        Firebase.database()
            .ref('Obat')
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let ObatItem = { ...data };

                this.setState({
                    obats: ObatItem,
                    obatsKey: Object.keys(ObatItem)
                });
            });
    };

    removeObat = (id) => {
        Alert.alert(
            "Info",
            "Anda yakin akan menghapus Data ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "OK", onPress: () => {
                        Firebase.database()
                            .ref('Obat/' + id)
                            .remove();
                        this.ambilData();
                        Alert.alert('Hapus', 'Sukses hapus Data')
                    },
                },
            ],
            { cancelable: false },
        );
    };

    render() {
        const { obats, obatsKey } = this.state;
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Daftar Obat</Text>
                    <View style={styles.garis} />
                </View>

                <View style={styles.listObat}>
                    {obatsKey.length > 0 ? (
                        obatsKey.map((key) => (

                            <CardObat key={key} obatItem={obats[key]} id={key}
                                {...this.props} removeObat={this.removeObat}/>
                        ))
                    ) : (
                            <Text>Daftar Kosong</Text>
                        )}
                </View>

                <View style={styles.wrapperButton}>
                    <TouchableOpacity
                        style={styles.btnTambah}
                        onPress={() => this.props.navigation.navigate('tambahDataObat')}>
                        <FontAwesomeIcon icon={faPlus} size={20} />
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    garis: {
        borderWidth: 1,
        marginTop: 10,
    },
    listObat: {
        paddingHorizontal: 30,
        marginTop: 20,
    },
    wrapperButton: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30,
    },
    btnTambah: {
        padding: 20,
        backgroundColor: 'yellow',
        borderRadius: 30,
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
});
