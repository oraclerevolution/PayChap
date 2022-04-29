import React, { Component, useEffect, useState } from 'react'
import { Text, StyleSheet, View, Platform, Alert, Image} from 'react-native'
import {Button, TextInput} from 'react-native-paper'
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const LoginPage = ({navigation}) => {
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={{fontSize:19, color:'gray', color:"#000", textAlign:"center", fontWeight:"bold"}}>Entrez un numéro de télephone pour commencez !</Text>
            <View style={styles.forms}>
                <TextInput placeholder='+225 XXXXXXXXXX' keyboardType="numeric" label="Numéro de téléphone" value={number} style={{height:50}} />
                <Button icon="login" style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('ScreenOTP')}>
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
        paddingTop:"10%"
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
        paddingRight:10
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