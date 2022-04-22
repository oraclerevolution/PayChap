import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Platform, Button as Btn } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Header } from 'react-native-elements'
import {Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog } from 'react-native-simple-dialogs';

const Checkout = ({ navigation }) => {

    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>Choisissez votre moyen de paiement</Text>
            <View style={{flex:1}}>
            <Image
                        source={require(`../assets/images/waves.png`)}
                        style={{width:200, height:100,alignSelf:"center", margin:25, marginBottom:25}}
                    />
                    <Text style={{fontSize:17, fontWeight:"bold", textAlign: "center"}}>Adresse Wave: +225 0709483463</Text>
                    <Text style={{fontSize:17, fontWeight:"bold", textAlign: "center"}}>Prix: 60.000 FCFA</Text>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate("Preuves")}>
                        Choisir
                    </Button>
            </View>
            <View style={{flex:1}}>
            <Image
                        source={require(`../assets/images/PM.png`)}
                        style={{width:350, height:150,alignSelf:"center", position:"relative",bottom:25}}
                    />
                    <Text style={{fontSize:17, fontWeight:"bold", textAlign: "center"}}>Adresse Perfect Money: 6565edf</Text>
                    <Text style={{fontSize:17, fontWeight:"bold", textAlign: "center"}}>Prix: 115$</Text>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate("Preuves")}>
                        Choisir
                    </Button>
            </View>

        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        paddingTop: 55,
        backgroundColor:"white",
    },
    logo:{
        width:300,
        height:220,
        alignSelf: 'center',
    },
    image:{
        width:200,
        height:150,
        alignSelf: 'center',
    },
    boutonLogin:{
        width:150,
        alignSelf:"center",
        marginTop:25,
        marginBottom:30,
        backgroundColor:"#1E89E2"
    },
    title:{
        fontSize:23,
        fontWeight:"bold",
        textAlign:"center",
        paddingBottom: 10,
    },
    picker:{
        height:40,
        width:350,
        marginTop:15,
        marginBottom:15,
        alignSelf: 'center',
    },
    nb:{
        color:"red",
        fontSize:12,
        marginBottom:25
    },
    avertissement:{
        fontSize:23,
        fontWeight:"bold",
    },
    button:{
        width:250,
        alignSelf:'center',
        backgroundColor: "#1E89E2",
        marginTop:15
    }
})
