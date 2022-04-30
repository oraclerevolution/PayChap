import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from 'react-native-elements'
import { Button, TextInput } from 'react-native-paper'

const PageTransfert = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header />
        <View style={{flex:1, padding:10}}>
            <Text style={{fontWeight:"bold", fontSize:20, marginBottom:10}}>Montant</Text>
            <Text>À</Text>
            <Text>Assia Jean</Text>
            <TextInput disabled value='+2250709483463' style={{height:45, marginBottom:10}} />
            <Text style={{fontSize:16, marginBottom:8}}>Saisissez le montant à transférer</Text>
            <TextInput label='Montant envoyé' keyboardType="number-pad" autoFocus placeholder='Entrer le montant' style={{marginBottom:10, height:60}} />
            <TextInput label='Montant reçu' keyboardType="number-pad" autoFocus placeholder='Entrer le montant' style={{marginBottom:10, height:60}} />

            <Text style={{textAlign:"center", marginTop:10}}>Frais paychap = 1%</Text>
            <Text style={{textAlign:"center", marginTop:10}}>Frais maximum 5.000F</Text>
            <Button icon="login" style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('Forms')}>
                    Transférer
                </Button>

        </View>
    </View>
  )
}

export default PageTransfert

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