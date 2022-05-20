import React, {useState} from 'react'
import { Text, StyleSheet, View,StatusBar, SafeAreaView, Image,TouchableOpacity, Alert} from 'react-native'
import { Header,Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PasswordChooseLogin = ({navigation, route}) => {
    const [identifiant, setIdentifiant] = React.useState('');
    const [passcode, setPasscode] = useState(['','','','']);
        const [accessToken, setAccessToken] = React.useState('')
    let numbers = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:0}]

    function onPressNumber(num) {
        let tempCode = passcode;
        for(let i = 0; i < tempCode.length; i++) {
            if(tempCode[i] === '') {
                tempCode[i] = num;
                break;
            }else{
                continue;
            } 
        }
        setPasscode(tempCode)
    }

    function onPressCancel(){
        let tempCode = passcode
        for(let i = tempCode.length - 1; i >= 0; i--) {
            if(tempCode[i] !== '') {
                tempCode[i] = '';
                break;
            }else{
                continue;
            } 
        }
        setPasscode(tempCode)
    }

    const paramsData = async (data) =>{
      const json = await AsyncStorage('userData', data)
      console.log('data set')
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

    async function eraseToken(){
      try{
        await AsyncStorage.removeItem('userToken')
      }catch(e){
        console.log(e)
      }
    }

    function redirect(){
        if (passcode == "") {
          Alert.alert('Attention', "Veuillez saisir un mot de passe")
        }else if(passcode > 4){
          Alert.alert('Attention', "Mauvaise saisie du mot de passe")
        }else{
          login()
        }
    }

    const getIdentifiant = async () => {
      const value = AsyncStorage.getItem('userId')
      if(value == ""){
        console.log('valeur introuvable')
      }else{
        setIdentifiant(value)
      }
    }
    React.useEffect(()=>{
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
        <SafeAreaView style={styles.container}>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Icon size={23} name="arrow-back" color="#fff" />
                    </TouchableOpacity>
                }
            />
            <StatusBar barStyle='light-content' />
            <View style={styles.swipe}>
                <View style={{marginTop:75}}>
                    <View>
                        <Text style={styles.passcodeText}>Veuillez définir votre code secret</Text>
                    </View>
                    <View style={styles.codeContainer}>
                        {
                            passcode.map((p, index)=>{
                                let style = p != ''?styles.code2: styles.code;
                                return <View style={style} key={index}></View>
                            })
                        }
                    </View>
                </View>
            </View>
            <View style={{alignItems:"center", justifyContent:'center'}}>
                <View style={styles.numbersContainer}>
                    {numbers.map(num=>{
                        return (
                            <TouchableOpacity style={styles.number} key={num.id} onPress={()=> onPressNumber(num.id)}>
                                <Text style={styles.numberText}>{num.id}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={()=> eraseToken()}>
                    <Text style={styles.buttonText}>Effacer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> redirect()}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swipe:{
        height:173,
        alignItems:"center",
        justifyContent:'center'
    },
    swipeUPtext:{
        fontSize:17,
        color:"#000",
        letterSpacing:-0.41,
        lineHeight:22
    },
    passcodeText:{
        fontSize:18,
        color:"#000",
        letterSpacing:0.34,
        lineHeight:25,
        position:'relative',
        top:"-150%"
    },
    codeContainer:{
        marginTop:18,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-around",
    },
    code:{
        width:13,
        height:13,
        borderRadius:13,
        borderWidth:1,
        borderColor:"#000"
    },
    code2:{
        width:13,
        height:13,
        borderRadius:13,
        backgroundColor:"#000"
    },
    number:{
        width:75,
        height:75,
        borderRadius:75,
        margin:8,
        backgroundColor:"rgba(0,0,0,0.1)",
        justifyContent:'center',
        alignItems:'center'
    },
    numbersContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:58,
        width:282,
        height:348,
        alignItems:'center',
        justifyContent: 'center',
    },
    numberText:{
        fontSize:36,
        color:"#000",
        letterSpacing:0,
        textAlign:'center'
    },
    buttons:{
        marginTop:73,
        marginLeft:46,
        marginRight:46,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    buttonText:{
        fontSize:16,
        color:"#000",
        letterSpacing:-0.39,
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default PasswordChooseLogin