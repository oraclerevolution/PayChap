import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Button} from 'react-native-paper'
import {Header, ListItem, Avatar,Button as Btn} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsPage = ({ navigation }) => {
    const list = [
        {
            title: 'Mon historique de transactions',
            icon: 'money',
            page: 'Historique',
        },
        {
            title: 'Moyens de réapprovisionnement',
            icon: 'credit-card',
            page: 'Informations',
        },
    ]


    const list2 = [
        {
          name: 'FAQ'
        },
        {
          name: 'Conditions générales'
        },
        {
          name: 'A propos'
        },
    ]

    return (
        <View style={{flex:1,paddingTop:15}}>
            <View style={styles.container}>
                <View style={styles.listItem1}>
                    {
                        list.map((l, i) => (
                        <ListItem key={i} bottomDivider onPress={()=> console.log("ok ok")}>
                            <Icon name={l.icon} />
                            <ListItem.Content>
                            <ListItem.Title>{l.title}</ListItem.Title>
                            </ListItem.Content>
                             <ListItem.Chevron />
                        </ListItem>
                        ))
                    }
                </View>

                <View style={styles.listItem2}>
                {
                    list2.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
                </View>
                
                <View style={styles.lastSection}>
                    <Image
                        source={require('../../assets/images/logout.png')}
                        style={styles.image}
                    />
                    <Button mode='outlined' labelStyle={{color:'#000'}} onPress={()=> navigation.navigate('Login')}>DECONNEXION</Button>
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