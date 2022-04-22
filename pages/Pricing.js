import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { PricingCard } from 'react-native-elements';
import { Button } from 'react-native-paper';

const PricingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
            source={require('../assets/images/abonnement.png')}
            style={{width:150, height:150,alignSelf:"center", margin:15}}
            />
            <Text style={styles.text}>Abonnez-vous !</Text>
            <Text style={styles.sousTitre}>Nous vous offrons des services de signaux de trading au travers de notre application mobile. Cliquez sur le bouton ci-dessous pour vous abonner.</Text>
            <View style={{flexDirection:"row", margin:10}}>
                <View>
                    <PricingCard
                        containerStyle={{position:"relative", right:"5%", backgroundColor:"#F1F4F7"}}
                        color="#4f9deb"
                        title="Pro"
                        price="$115"
                        info={['Signaux illimités / jour', 'Gestion des trades', 'All Core Features']}
                        button={{ title: ' DEBUTEZ', icon: 'flight-takeoff' }}
                        onButtonPress={()=> navigation.navigate('Checkout')}
                    />
                </View>
            </View>
        </View>
    )
}

export default PricingPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:15,
        backgroundColor: "white",
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    },
    sousTitre:{
        fontSize:16,
        fontStyle:"italic",
        textAlign:"center"
    },
    button:{
        position:"absolute",
        bottom: "2%",
        width:250,
        alignSelf:'center'
    }
})
