import React, { Component, useEffect, useState, useRef } from 'react'
import { Text, StyleSheet, View, Platform, Alert, Image} from 'react-native'
import {Button, TextInput} from 'react-native-paper'
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'
import MaskInput from 'react-native-mask-input';

const LoginPage = ({navigation}) => {
    const [number, onChangeNumber] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const value = "07 09 48 34 63"
    const firstInput = useRef(null)

    function redirect(){
        if (phone == value) {
            navigation.navigate('Password')
        }else{
            navigation.navigate('Forms')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize:18, color:'gray', color:"#000", textAlign:"center", paddingTop:30}}>Entrez votre numéro de télephone pour commencer !</Text>
            <View style={styles.forms} ref={firstInput}>
                    <PhoneInput style={{borderBottomWidth:1, padding:10, width:"33.2%"}} confirmText="Confirmer" cancelText='Annuler' initialValue='+225' allowZeroAfterCountryCode={true} />
                    <MaskInput placeholder='XX XX XX XX XX' 
                    maxLength={14} 
                    keyboardAppearance="light" 
                    keyboardType="number-pad" 
                    style={{height:42, backgroundColor:"#fff",borderBottomWidth:1, borderBottomColor:"#000", position:"absolute", width:"70%", right:0, top:"-0.6%"}} 
                    value={phone}
                    onChangeText={(masked, unmasked) => {
                        setPhone(masked); // you can use the unmasked value as well
                
                        // assuming you typed "9" all the way:
                        console.log(masked); // (99) 99999-9999
                        console.log(unmasked); // 99999999999
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