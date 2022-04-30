import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from 'react-native-elements'
import { TextInput, Button } from 'react-native-paper'

const PaiementCanal = () => {
  return (
    <View style={styles.container}>
        <Header
            centerComponent={
                <Text style={{color:"white",fontSize:20}}>Facture Canal+</Text>
            }
        />
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center', padding:6}}>
            <Image source={require('../assets/icon.png')} style={{width:130, height:130}} />
            <View style={{width:"100%", marginTop:25}}>
                <TextInput keyboardType="number-pad" style={{height:45, margin:4}} label="Numéro de réabonnement" />
                <TextInput style={{height:45, margin:4}} label="Formule" />
                <TextInput style={{height:45, margin:4}} label="Durée" />
            </View>
                <Button icon="login" style={styles.boutonLogin} mode="contained"  onPress={() => console.log('okokok')}>
            Valider
        </Button>
        </View>
    </View>
  )
}

export default PaiementCanal

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    },
    boutonLogin:{
        marginTop:"5%",
            width:150,
            alignSelf:"center",
            marginTop:25,
            marginBottom:30,
            backgroundColor:"#1E89E2"
    }
})