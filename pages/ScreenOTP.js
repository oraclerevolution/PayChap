import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Header, Icon } from 'react-native-elements'
import { Button, TextInput } from 'react-native-paper'
import OTPTextInput from "react-native-otp-textinput"

const ScreenOTP = ({navigation, route}) => {
    let otpInput = React.useRef(null);
    const [otp, setOtp] = React.useState('')
    const [accessToken, setAccessToken] = React.useState('')
    const [userNumber, setUserNumber] = React.useState('')

    const { client_id,r_token } = route.params;

    React.useEffect(()=>{
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

    function checkOtp(){
      if(otp == r_token){
        navigation.navigate('Forms',{
          otp: otp,
          number: client_id
        })
      }else{
        Alert.alert('Attention', "Le code que vous avez saisi n'est pas correct")
      }
    }

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
                <Text style={styles.text}>Veuillez saisir les 6 chiffres du code OTP que vous avez reçu par sms</Text>
                <TextInput placeholder='Code OTP' onChangeText={(text)=>setOtp(text)} maxLength={6} keyboardType='number-pad' secureTextEntry={true} style={{width:"95%", margin:5, height:50, backgroundColor:"#fff", textAlign:"center"}} />
                <Button style={styles.boutonLogin} mode="contained" onPress={() => checkOtp()}>
                    Suivant
                </Button>
            </View>
        </View>
    )
}

export default ScreenOTP

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