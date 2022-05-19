import React, { Component, useEffect, useState, useRef } from 'react'
import { Text, StyleSheet, View, Platform, Alert, Image, TouchableOpacity} from 'react-native'
import {Button, TextInput} from 'react-native-paper'
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Header } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'
import MaskInput from 'react-native-mask-input';

const LoginPage = ({navigation}) => {
    const [number, onChangeNumber] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [indicatif, setIndicatif] = React.useState('+225');
    const [accessToken, setAccessToken] = React.useState('')

    const firstInput = useRef(null)

    function sendCodeOTP(){
      const url = "http://18.218.229.67/paychap/c001/initcustomerregistration"
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + accessToken
        },
        body: JSON.stringify({
          p_identifiant:indicatif.substring(1, 4)+phone,
          p_email:'', 
          p_name:'' 
        })
      }).then((response) => response.json()).then((responseData) => {
        const otp = responseData.r_contenu.r_token
        console.log(responseData.r_contenu)
        navigation.navigate('ScreenOTP',{r_token:otp,client_id:"225"+phone})
      })
    }

    function checkUserRegistration(){
      const url = "http://18.218.229.67/paychap/c001/getbalance"
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + accessToken
        },
        body: JSON.stringify({
          "p_idpaychap": indicatif.substring(1, 4)+phone,
        })
      }).then((response) => {
        if(response.status == 200){
          navigation.navigate('Password',{
            identifiant:indicatif.substring(1, 4)+phone
          })
        }else{
          sendCodeOTP()
        }
      })
    }

    function redirect(){
        if (phone == "") {
            Alert.alert('Attention', "Veuillez saisir un numero de téléphone dans le champ")
        }else if(phone.length < 10){
            Alert.alert('Attention', "Veuillez saisir un numero de téléphone valide")
        }else{
          checkUserRegistration()
        }
    }
    
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


    return (
        <View style={styles.container}>
            <Text style={{fontSize:18, color:"#000", textAlign:"center", paddingTop:30}}>Entrez votre numéro de télephone pour commencer !</Text>
            <View style={styles.forms} ref={firstInput}>
                    <PhoneInput style={{borderBottomWidth:1, padding:10, width:"33.2%"}} confirmText="Confirmer" cancelText='Annuler' initialValue={indicatif} onChangePhoneNumber={(text)=>setIndicatif(text)} allowZeroAfterCountryCode={true} />
                    <MaskInput placeholder='XX XX XX XX XX' 
                    maxLength={14} 
                    keyboardAppearance="light" 
                    keyboardType="number-pad" 
                    style={{height:42, backgroundColor:"#fff",borderBottomWidth:1, borderBottomColor:"#000", position:"absolute", width:"70%", right:0, top:"-0.6%"}} 
                    value={phone}
                    onChangeText={(masked, unmasked) => {
                        setPhone(unmasked); // you can use the unmasked value as well
                      }}
                      mask={[/\d/,/\d/,' ', /\d/,/\d/,' ',/\d/,/\d/,' ', /\d/,/\d/,' ',/\d/,/\d/,]}
                    />
                    <Button style={styles.boutonLogin} mode="contained"  onPress={() => redirect()}>
                        Suivant
                    </Button>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:15,
        paddingTop:"10%",
        paddingTop:"9%"
    },
    itemStyle:{
        marginTop:5
    },
    InputStyle:{
        color:"black",
        marginBottom:1,
        marginLeft:5,
        fontSize:14
    },
    forms:{
        marginTop:"5%",
        paddingRight:10,
        flexDirection:"column",
    },
    textinput:{
        height: 40,
        width:"100%",
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:4,
        margin:10,
        paddingLeft:5,
        paddingRight:5,
    },
    boutonLogin:{
        width:150,
        alignSelf:"center",
        marginTop:25,
        marginBottom:30,
        borderRadius:18,
        backgroundColor:"#1E89E2"
    },
    logo:{
        height:275,
        width:310,
        marginBottom:20,
        alignSelf:"center"
    },
})

export default LoginPage