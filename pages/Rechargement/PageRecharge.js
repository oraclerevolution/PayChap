import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from 'react-native-elements'
import { Button, TextInput } from 'react-native-paper'

const PageRecharge = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header />
        <View style={{flex:1, padding:10}}>
            <Image source={require('../../assets/orange.png')} style={{width:130, height:130, alignSelf:'center', marginBottom:15}} />
            <Text style={{fontSize:16, marginBottom:8}}>Saisissez le montant à recharger</Text>
            <TextInput label='Compte Orange Money' keyboardType="number-pad" placeholder='Entrez le numero OM à débiter' style={{marginBottom:10, height:60}} />
            <TextInput label='Montant à recharger' keyboardType="number-pad" placeholder='Entrez le montant' style={{marginBottom:10, height:60}} />
            <TextInput label='Montant reçu' keyboardType="number-pad" disabled placeholder='Entrez le montant' style={{marginBottom:10, height:60}} />

            <Text style={{textAlign:"center", marginTop:10}}>Frais hors paychap = 1.2%</Text>
            <Text style={{textAlign:"center", marginTop:10}}>Frais maximum 5.000F</Text>
            <Button icon="login" style={styles.boutonLogin} mode="contained"  onPress={() => console.log('okokok')}>
                    Recharger
                </Button>

        </View>
    </View>
  )
}

export default PageRecharge

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    },
    boutonLogin:{
        width:150,
        alignSelf:"center",
        marginTop:25,
        marginBottom:30,
        backgroundColor:"#1E89E2",
        position:"absolute",
        bottom:0
    },
})