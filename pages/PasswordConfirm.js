import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Header, Icon } from 'react-native-elements'
import { Button } from 'react-native-paper'
import OTPTextInput from "react-native-otp-textinput"
import AsyncStorage from '@react-native-async-storage/async-storage';

const PasswordConfirm = ({navigation}) => {
    let otpInput = React.useRef(null);
    const [accessToken, setAccessToken] = React.useState('')
    const [identifiant, setIdentifiant] = React.useState('');

    const getIdentifiant = async () => {
      const value = AsyncStorage.getItem('userId')
      if(value == ""){
        console.log('valeur introuvable')
      }else{
        setIdentifiant(value)
      }
    }

    function login(){
      const url = "http://18.218.229.67/paychap/c001/getbalancewithsecretcode"
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + accessToken
        },
        body: JSON.stringify({
          "p_idpaychap":identifiant._W, 
          "p_secret":passcode.join('')
        })
      }).then((response) => response.json()).then((responseData)=>{
        if(responseData.Error == "401"){
          Alert.alert('Attention', responseData.error_description)
          setPasscode(['','','',''])
        }else{
          if(responseData.r_statut == 200){
            paramsData(responseData)
            navigation.navigate('Tabs')
          }
        }
      })
    }
    
    useEffect(()=>{
      getIdentifiant()
      //generate access token
      const client_id = 'ITCLT11'
      const client_secret = '$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0'
      
      const baseHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "Basic " + ArrayBuffer.toString(client_id, client_secret)
      };

      const params = "grant_type=client_credentials&client_secret=$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0&client_id=ITCLT11";
      const url = "http://18.218.229.67/paychap/gettoken?grant_type=client_credentials&client_secret=$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0&client_id=ITCLT11"

      return fetch(url,{
        method: "POST",
        body: params,
        headers: baseHeaders
      }).then((response) => response.json()).then((responsetokenJson) => {
        const token = responsetokenJson.access_token
        setAccessToken(token)
      })
    },[])
    
    return (
        <View style={{flex:1}}>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Icon size={23} name="arrow-back" color="#fff" />
                    </TouchableOpacity>
                }
            />
            <View style={styles.container}>
                <Text style={styles.text}>Veuillez confirmer votre code secret</Text>
                <OTPTextInput ref={e => (otpInput = e)} />
                <Button style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('Forms')}>
                    Suivant
                </Button>
            </View>
        </View>
    )
}

export default PasswordConfirm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 15,
        fontSize:18
    },
    boutonLogin:{
        width:150,
        alignSelf:"center",
        marginTop:25,
        marginBottom:30,
        borderRadius:18,
        backgroundColor:"#1E89E2"
    },
})