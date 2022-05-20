import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native'
import React,{useEffect} from 'react'
import { TextInput, Button, RadioButton } from 'react-native-paper'
import { Header, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OTPTextInput from "react-native-otp-textinput"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MailComposer} from 'expo'

const FormsData = ({navigation, route}) => {
    const [checked, setChecked] = React.useState('M');
    const [accessToken, setAccessToken] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [code, setCode] = React.useState('')
    const [codeConfirmation, setCodeConfirmation] = React.useState('')
    const {otp, number} = route.params

    let otpInput = React.useRef(null);

    const storeData = async () => {
      try{
        await AsyncStorage.setItem('userToken', 'old')
        await AsyncStorage.setItem('userId', number)
        await AsyncStorage.setItem('userPassword', code)
      } catch (e) {
        console.log("erreur" + e)
      }
    }

    function sendEmailConfirmation(){
      MailComposer.composeAsync({
        recipients: 
        [email],
        subject: 'Inscription PayChap',
        body: `Bienvenue sur PayChap, votre login est ${number} et votre mot de passe est celui que vous avez utilisé lors de l'enregistrement. L'équipe PayChap`,
      });
    }

    function confirmRegistration(){
      const url = "http://18.218.229.67/paychap/c001/confirmcustomerregistration"
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + accessToken
        },
        body: JSON.stringify({
          "p_identifiant":number, 
          "p_secret":code,
          "p_otp":otp,
          "p_email":email,
          "p_name":username,
          "p_sexe": checked
        })
      }).then((response) => response.json()).then((responseData)=>{
        if(responseData.Error == '401'){
          storeData()
          sendEmailConfirmation()
          //Alert.alert('Attention', "Une erreur s'est produite ! Veuillez recommencez s'il vous plaît")
          navigation.navigate('FileUploadInscription',{
            identifiant: number,
            secret: code,
            otp: otp
          })
        }else{
          console.log(responseData)
          storeData()
        }
      })
    }

    function redirect(){
        if (username == "" || email == "" || code == "" || codeConfirmation == "") {
            Alert.alert('Attention', "Tous les champs sont obligatoires")
        }else {
          if(code == codeConfirmation){
            confirmRegistration()
          }else{
            Alert.alert('Attention', "Les codes secrets sont différents")
          }
        }
    }

    useEffect(()=>{
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
        <Text style={{fontSize:21, fontWeight:"bold", paddingLeft:8 , marginBottom:"5%", textAlign:"left", color:"#1E89E2"}}>Enregistrement</Text>
        <View style={{justifyContent: "center", alignItems: 'center',}}>
            <TextInput label="Nom complet" onChangeText={(text)=>setUsername(text)} placeholder='Assia Jean' style={{width:"95%", margin:5, height:50, backgroundColor:"#fff"}} />
            <TextInput label="Email" onChangeText={(text)=>setEmail(text)} keyboardType="email-address" placeholder='assiajean@email.com' style={{width:"95%", margin:5, height:50, backgroundColor:"#fff"}} />
            <View style={{flexDirection:"row", justifyContent:'flex-start', width:"100%", padding:8}}>
                <Text style={{
                    position:"relative",top:"2%"
                }}>Homme</Text>
                <View style={{position:'relative', left:"20%"}}>
                    <RadioButton
                    color='blue'
                        value="M"
                        status={ checked === 'M' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('M')}
                    />
                </View>
                <Text style={{
                    position:"relative",top:"2%", right:"-455%"
                }}>Femme</Text>
                <View style={{position:'relative', right:"-470%"}}>
                    <RadioButton
                    color='blue'
                        value="F"
                        status={ checked === 'F' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('F')}
                    />
                </View>
            </View>
            <Text style={styles.text}>Veuillez défnir votre code secret</Text>
            <OTPTextInput ref={e => (otpInput = e)} handleTextChange={(text)=>setCode(text)} />
            <OTPTextInput ref={e => (otpInput = e)} handleTextChange={(text)=>setCodeConfirmation(text)} />
            <Button style={styles.boutonLogin} mode="contained"  onPress={() => redirect()}>
              Continuer
            </Button>
        </View>
        </View>
    </View>
  )
}

export default FormsData

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        padding:8,
        paddingTop:20
        
    },
    boutonLogin:{
            marginTop:"5%",
            width:150,
            alignSelf:"center",
            marginTop:25,
            marginBottom:30,
            backgroundColor:"#1E89E2",
            borderRadius:18
    },
    text: {
        marginTop:10,
        fontSize:18
    },
})