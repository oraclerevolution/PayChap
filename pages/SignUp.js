import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput, Alert, Platform, ScrollView} from 'react-native'
import {Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const InscriptionPage = ({navigation}) => {
    const [nom, onChangeName] = React.useState('');
    const [numero, onChangeTel] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/signup.png')}
                style={styles.logo}
            />
            <Text style={{fontSize:19, color:'#000', textAlign:"center", fontWeight:"bold"}}>Inscrivez-vous pour commencer !</Text>
            <View style={styles.forms}>
                <View>
                <Input
                    style={styles.InputStyle}
                        placeholder="Entrez votre nom et prenoms"
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='black'
                            />
                        }
                        onChangeText={name => onChangeName(name)} 
                        value={nom}
                    />
                </View>
                <View>
                <Input
                    style={styles.InputStyle}
                        placeholder="Entrez votre numero de téléphone"
                        leftIcon={
                            <Icon
                            name='phone'
                            size={24}
                            color='black'
                            />
                        }
                        onChangeText={tel => onChangeTel(tel)} 
                        value={numero} keyboardType="numeric"
                    />
                </View>

                <View>
                <Input
                    style={styles.InputStyle}
                        placeholder="Entrez votre email"
                        leftIcon={
                            <Icon
                            name='envelope'
                            size={24}
                            color='black'
                            />
                        }
                        onChangeText={email => onChangeEmail(email)} 
                        value={email}
                    />
                </View>

                <View>
                <Input
                    style={styles.InputStyle}
                        placeholder="Saisissez un mot de passe"
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            color='black'
                            />
                        }
                        onChangeText={password => onChangePassword(password)} 
                        value={password}
                        secureTextEntry={true}
                    />
                </View>

                <Button icon="login" style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('Login')}>
                    INSCRIPTION
                </Button>

                <Text style={{textAlign:"center", marginTop:"3%", color:'#000'}} onPress={()=> navigation.navigate('Login')}>Vous avez un compte ? Connectez-vous</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:"center",
        padding:15,
    },
    forms:{
        marginTop:"7%",
        paddingRight:10
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
    textinput:{
        height: 40,
        width:"100%",
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:4,
        margin:5,
        paddingLeft:5,
        paddingRight:5,
    },
    boutonLogin:{
        width:160,
        alignSelf:"center",
        marginTop:20,
        marginBottom:30,
        backgroundColor:"#1E89E2"
    },
    logo:{
        marginBottom:20,
        marginTop:15,
        alignSelf:"center",
        width:255,
        height:200
    },
})

export default InscriptionPage