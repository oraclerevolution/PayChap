import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header, Icon } from 'react-native-elements'
import { Button, TextInput } from 'react-native-paper'

const PageAutreTransfert = ({route,navigation}) => {
    const nom = route.params.reseauNom
    const image = route.params.reseauImage
    const userName = route.params.userName
    const userPhone = route.params.userPhone

  return (
    <View style={styles.container}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon size={23} name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:"white", fontSize:19,}}>Transferer de l'argent</Text>
            }
        />
        <View style={{flex:1, padding:10}}>
            <Image source={{uri:image}} style={{width:130, height:130, alignSelf:'center', marginBottom:15}} />
            <View style={{alignItems:"center", backgroundColor:"#efefef", flexDirection:"row", borderRadius:6}}>
                <View style={{width:40, alignItems: 'center', justifyContent: 'center', backgroundColor:"#efefef", borderRadius:20, height:40}}>
                    <Icon name='person' />
                </View>
                <View style={{flex:1, alignSelf:"center",paddingTop:"2%"}}>
                    <Text style={{textAlign:"center", fontSize:17, fontWeight:"bold"}}>{userName}</Text>
                    <Text style={{textAlign:"center", fontSize:17, marginBottom:20, fontWeight:"bold"}}>{userPhone}</Text>            
                </View>
            </View>
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

export default PageAutreTransfert

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