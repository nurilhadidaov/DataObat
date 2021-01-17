import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import tambahDataObat from '../pages/tambahDataObat'
import DetailObat from '../pages/DetailObat'
import EditObat from '../pages/EditObat'

const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options ={{ headerShown : false}}/>
        <Stack.Screen name="tambahDataObat" component={tambahDataObat} options={{ title: 'Tambah Daftar Obat' }}/>
        <Stack.Screen name="DetailObat" component={DetailObat} options={{ title: 'Detail Obat' }}/>
        <Stack.Screen name="EditObat" component={EditObat} options={{ title: 'Edit Obat' }}/>
      </Stack.Navigator>
    )
}

export default Router
