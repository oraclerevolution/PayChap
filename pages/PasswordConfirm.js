import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Header, Icon } from 'react-native-elements'
import { Button } from 'react-native-paper'
import OTPTextInput from "react-native-otp-textinput"

const PasswordConfirm = ({navigation}) => {
    let otpInput = React.useRef(null);
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
                <Text style={styles.text}>Veuillez confirmer votre code secret</Text>
                <OTPTextInput ref={e => (otpInput = e)} />
                <Button style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('Forms')}>
                    Suivant
                </Button>
            </View>
        </View>
    )
}

export default PasswordConfirm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 15,
        fontSize:18
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