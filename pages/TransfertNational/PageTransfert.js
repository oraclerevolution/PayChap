import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header, Icon } from 'react-native-elements'
import { Button, TextInput } from 'react-native-paper'

const PageTransfert = ({route,navigation}) => {
    const nom = route.params.userName
    const phone = route.params.userPhone
  return (
    <View style={styles.container}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon size={23} name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:"white",fontSize:19}}>Transferer de l'argent</Text>
            }
      />
        <View style={{flex:1, padding:10}}>
            <View style={{alignItems:"center", backgroundColor:"#efefef", flexDirection:"row", borderRadius:6}}>
                <View style={{width:40, alignItems: 'center', justifyContent: 'center', backgroundColor:"#efefef", borderRadius:20, height:40}}>
                    <Icon name='person' />
                </View>
                <View style={{flex:1, alignSelf:"center",paddingTop:"2%"}}>
                    <Text style={{textAlign:"center", fontSize:17, fontWeight:"bold"}}>{nom}</Text>
                    <Text style={{textAlign:"center", fontSize:17, marginBottom:20, fontWeight:"bold"}}>{phone}</Text>            
                </View>
            </View>
            <TextInput label='Montant à envoyer' keyboardType="number-pad" autoFocus placeholder='Entrer le montant' style={{marginBottom:10, height:60, backgroundColor: "#fff",}} />
            <TextInput label='Montant à recevoir' keyboardType="number-pad" autoFocus placeholder='Entrer le montant' style={{marginBottom:10, height:60, backgroundColor: "#fff",}} />

            <Text style={{textAlign:"center", marginTop:10}}>Frais paychap = 1%</Text>
            <Text style={{textAlign:"center", marginTop:10}}>Frais maximum 5.000F</Text>
            <Button style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('Tabs')}>
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
        bottom:0,
        borderRadius:18
    },
})