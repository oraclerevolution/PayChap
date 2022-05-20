import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Button, List} from 'react-native-paper'
import {Header, ListItem, Avatar,Button as Btn} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsPage = ({ navigation }) => {

    const [identifiant, setIdentifiant] = React.useState('')
    const [logoutText, setLogoutText] = React.useState('')

    async function logout(){
      await AsyncStorage.removeItem('userId')
      navigation.navigate('Login')
    }

    async function getUserId(){
      const number = await AsyncStorage.getItem('userId')
      setIdentifiant(number)
      setLogoutText('Se deconnecter ('+number + ')')
    }

    React.useEffect(()=>{
      getUserId()
    },[])
    return (
        <View style={{flex:1,paddingTop:15}}>
            <View style={styles.container}>
                <View style={{flex:2, paddingTop:20}}>
                    <List.Item
                        title="Invitez un ami"
                        left={props => <List.Icon {...props} icon="share" />}
                    />
                    <List.Item
                        title="Appelez le service client gratuitement"
                        left={props => <List.Icon {...props} icon="phone" />}
                    />
                    <List.Item
                        title="Trouvez les agents à proximité"
                        left={props => <List.Icon {...props} icon="map" />}
                    />
                    <List.Item
                        title="Vérifiez votre plafond"
                        left={props => <List.Icon {...props} icon="history" />}
                    />
                    <List.Item
                        title="Modifiez votrre code secret"
                        left={props => <List.Icon {...props} icon="key" />}
                    />
                    <List.Item
                        title="Utiliser le code promotionnel"
                        left={props => <List.Icon {...props} icon="trophy" />}
                    />
                    <List.Item
                        title={logoutText}
                        left={props => <List.Icon {...props} icon="logout" />}
                        onPress={logout}
                    />
                </View>
                <View style={{flex:1, justifyContent:"flex-end", alignItems:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <Image source={require('../../assets/orange.png')} style={{width:50, height:50, margin:4}} />
                        <Image source={require('../../assets/om.png')} style={{width:50, height:50, margin:4}} />
                        <Image source={require('../../assets/djamo.png')} style={{width:50, height:50, margin:4}} />
                    </View>
                    <Text style={{color:"gray"}}>Conditions Générales</Text>
                    <Text style={{color:"gray"}}>Politiques de confidentialités</Text>
                    <Text style={{color:"gray"}}>Version 19.05.22 - v1.8.0</Text>
                </View>
                
            </View>
        </View>
    )
}

export default SettingsPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    },
     image:{
        width:140,
        height:140,
        marginBottom:10
    },
    listItem1:{
        marginTop:'5%',
        marginBottom:'8%',
    },
    listItem2:{
        marginTop:'10%',
        marginBottom:'5%'
    },
    lastSection:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#fff'
    },
})