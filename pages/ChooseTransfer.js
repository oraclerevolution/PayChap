import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from 'react-native-elements'

const ChooseTransfer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={
            <Text style={{color:"white",fontSize:20}}>Transfert d'argent</Text>
        }
      />
      <View style={{flex:1}}>
        <Text style={{fontWeight:"500",textAlign:"center", fontSize:17, margin:10}}>Choisissez le type de transfert d'argent que vous souhaiter éffectuer</Text>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.cardView} onPress={()=> navigation.navigate('TransfertNational')}>
                <Image source={require('../assets/TransferNat.png')} style={{width:90, height:90, margin:6}} />
                <Text style={{fontSize:15}}>Transfert national</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardView} onPress={()=> console.log('okokok')}>
                <Image source={require('../assets/TransferInter.png')} style={{width:90, height:90, margin:6}} />
                <Text style={{fontSize:15}}>Transfert international</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChooseTransfer

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    },
    cardView:{
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        flex:1, padding:6, margin:5, backgroundColor:"#fff", height:150, justifyContent:"center", alignItems: 'center',borderRadius:8
    }
})