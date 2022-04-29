import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-paper';

const AccueilPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1.5, justifyContent: 'center',alignItems:'center'}}>
                <Image source={require('../assets/images/crypto.png')} style={styles.logo} />
            </View>
            <View style={{flex:1, padding:6}}>
                <Text style={styles.text}>Envoyez et recevez de l'argent</Text>
                <Text style={styles.text}>avec Wallet Test</Text>

                <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Login')}>
                Commencez
                </Button>
            </View>
        </View>
    )
}

export default AccueilPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        backgroundColor: "white",
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        position:"relative",
        top:"60%"
    },
    logo:{
        width:300,
        height:220,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 130,
    },
    sousTitre:{
        fontSize:15,
        fontStyle:"italic",
        position:"absolute",
        bottom:"11%",
        right:"5%"
    },
    button:{
        position:"absolute",
        bottom: "2%",
        width:250,
        alignSelf:'center',
        backgroundColor: "#1E89E2",
    }
})
