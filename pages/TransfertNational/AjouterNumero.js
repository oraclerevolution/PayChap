import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React,{useState, useRef} from 'react'
import { Header, Icon } from 'react-native-elements'
import { TextInput, Button } from 'react-native-paper'
import PhoneInput from 'react-native-phone-input'
import MaskInput from 'react-native-mask-input';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'

const AjouterNumero = ({navigation}) => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [indicatif, setIndicatif] = useState('+225')
    const firstInput = useRef(null)

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Attention",
      "Tous les champs sont réquis",
      [
        { text: "D'accord", onPress: () => console.log("OK Pressed"), style:"default" }
      ]
    );

    function checkInput(){
        if (phone == '' || name == '') {
            createTwoButtonAlert()
        }else{
            navigation.navigate('TransfertNatMontant',{
                userName : name,
                userPhone: indicatif + " " + phone
            })
        }
    }
  return (
    <View style={styles.container}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon size={23} name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:"white",fontSize:19}}>Ajoutez le numéro</Text>
            }
      />
      <View style={{flex:1, marginTop:15}}>
            <TextInput label="Nom complet" placeholder='Assia Jean' style={{width:"95%", margin:5, height:50, backgroundColor:"#fff"}} onChangeText={text => setName(text)} />

            <View style={styles.forms} ref={firstInput}>
                <PhoneInput style={{borderBottomWidth:1, borderBottomColor:"lightgray", padding:10, width:"33.2%"}} confirmText="Confirmer" cancelText='Annuler' onChangePhoneNumber={text=> setIndicatif(text)} initialValue={indicatif} allowZeroAfterCountryCode={true} />
                <MaskInput placeholder='XX XX XX XX XX' 
                maxLength={14} 
                keyboardAppearance="light" 
                keyboardType="number-pad"
                style={{height:42, backgroundColor:"#fff",borderBottomWidth:1, borderBottomColor:"lightgray", position:"absolute", width:"70%", right:0, top:"-0.6%"}} 
                value={phone}
                onChangeText={(masked, unmasked) => {
                    setPhone(masked);
                }}
                    mask={[/\d/,/\d/,' ', /\d/,/\d/,' ',/\d/,/\d/,' ', /\d/,/\d/,' ',/\d/,/\d/,]}
                />
                <Button 
                    style={styles.boutonLogin}
                    mode="contained"
                    onPress={checkInput}
                >
                    Suivant
                </Button>
                
            </View>
      </View>
    </View>
  )
}

export default AjouterNumero

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    forms:{
        marginTop:"5%",
        paddingRight:10,
        margin:10,
        flexDirection:"column",
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