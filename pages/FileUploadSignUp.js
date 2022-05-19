import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, Alert } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Header, Icon } from 'react-native-elements'
import  * as ImagePicker from 'expo-image-picker'
import * as Constants from 'expo-constants'
import { Button } from 'react-native-paper'

const FileUploadSignUp = ({navigation, route}) => {
    const [recto, setRecto] = useState(null)
    const [verso, setVerso] = useState(null)
    const {number, secret, otp} = route.params
    const [accessToken, setAccessToken] = React.useState('')

    function setCard(){
      const url = "http://18.218.229.67/paychap/c001/createwallet/form"
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + accessToken
        },
        body: JSON.stringify({
          "p_identifiant":number, 
          "p_secret":secret,
          "p_token": otp
        })
      }).then((response) => response.json()).then((responseData)=>{
        console.log(responseData)
      })
    }
    
    useEffect(()=>{
        if(Platform.OS !== 'web'){
            const {status} = ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== "granted") {
                console.log('Permission denied')
            }
        }
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

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        console.log(result);
        if(!result.cancelled){
            setRecto(result.uri)
        }
    }

    const PickVerso = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        console.log(result);
        if(!result.cancelled){
            setVerso(result.uri)
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
            <Text style={{fontSize:18, color:"black", marginBottom:10}}>Chargez votre pièce d'identité</Text>
            <TouchableOpacity onPress={PickImage} style={{backgroundColor:"#efefef", borderRadius:5, borderWidth:1, width:300, height:200, justifyContent:"center", alignItems: 'center', margin:10}}>
                <Text>Recto</Text>
                {recto && <Image source={{uri:recto}} style={{
                    width:300, height:200
                }} />}
            </TouchableOpacity>
            
            <TouchableOpacity onPress={PickVerso} style={{backgroundColor:"#efefef", borderRadius:5,borderWidth:1, width:300, height:200, justifyContent:"center", alignItems: 'center', margin:10}}>
                <Text>Verso</Text>
                {verso && <Image source={{uri:verso}} style={{
                    width:300, height:200
                }} />}
            </TouchableOpacity>
            <View style={{marginTop:20}}>
                <Button mode="contained" style={{marginBottom:2, borderRadius:18, backgroundColor:"#1E89E2"}} onPress={()=> navigation.navigate('Tabs')}>Passer cette étape</Button>
                <Button mode="contained" style={{marginBottom:2, borderRadius:18, backgroundColor:"#1E89E2"}} onPress={()=> navigation.navigate('Tabs')}>Valider la pièce</Button>
            </View>
        </View>
    </View>
  )
}

export default FileUploadSignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent: 'center',
    }
})