import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header, Icon } from 'react-native-elements'
import { Button, TextInput } from 'react-native-paper'

const PageRecharge = ({route,navigation}) => {
    const nom = route.params.reseauNom
    const image = route.params.reseauImage
  return (
    <View style={styles.container}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon size={23} name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:"white", fontSize:19,}}>Recharger mon compte</Text>
            }
        />
        <View style={{flex:1, padding:10}}>
            <Image source={{uri:image}} style={{width:130, height:130, alignSelf:'center', marginBottom:15}} />
            <TextInput label={`Numéro ${nom}`} keyboardType="number-pad" placeholder='Entrez le numero OM à débiter' style={{marginBottom:10, height:60, backgroundColor:"white"}} />
            <TextInput label='Montant à recharger' keyboardType="number-pad" placeholder='Entrez le montant' style={{marginBottom:10, height:60, backgroundColor:"white"}} />
            <TextInput label='Code OTP' keyboardType="number-pad" placeholder='Entrez le code OTP' style={{marginBottom:10, height:60, backgroundColor:"white"}} />

            <Text style={{textAlign:"center", marginTop:10}}>Frais hors paychap = 1.2%</Text>
            <Text style={{textAlign:"center", marginTop:10}}>Frais maximum 5.000F</Text>
            <Button style={styles.boutonLogin} mode="contained"  onPress={() => console.log('Tabs')}>
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
        borderRadius:18
    },
})