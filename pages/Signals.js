import React, { useState, useEffect, useRef } from 'react'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Platform  } from 'react-native'
import { Header } from 'react-native-elements'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    paire: 'GBPUSD',
    biais: 'BUY',
    entry: '1.32800',
    stop:'1.32500',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2ba',
    paire: 'NZDCAD',
    biais: 'SELL',
    entry: '1.32800',
    stop:'1.32500',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abc28ba',
    paire: 'EURUSD',
    biais: 'BUY',
    entry: '1.32800',
    stop:'1.32500',
  },
];

Notifications.setNotificationHandler({
    handleNotification: async ()=> ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    })
})

const Signal = ({navigation}) => {

    const [expoPushToken, setExpoPushToken] = useState('')
    const [notification, setNotification] = useState(false)
    const notificationListener = useRef()
    const responseListener = useRef()

    useEffect(()=> {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token))
        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });
        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });
        return()=> {
            Notifications.removeNotificationSubscription(notificationListener.current)
            Notifications.removeNotificationSubscription(responseListener.current)
        }
    }, [])

  const Item = ({ paire, biais, entry, stop }) => {
    return(
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('DetailsSignals')}>
            <Text style={styles.title}> Paire: {paire}</Text>
            <Text style={styles.bias}>{biais}</Text>
            <Text style={styles.title}> Point d'entré: {entry}</Text>
            <Text style={styles.title}> Stop loss: {stop}</Text>
        </TouchableOpacity>
    )
   
}
    const renderItem = ({ item }) => (
        <Item paire={item.paire} biais={item.biais} entry={item.entry} stop={item.stop} />
    );
    return (
        <View style={{flex:1}}>
                <Header
                    centerComponent={{ text: 'SIGNAUX IPM', style: { color: '#fff', fontSize:20 } }}
                />
                <View style={styles.container}>
                     <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
            </View>
        </View>
    )
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications

export default Signal

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item: {
        backgroundColor: '#4180DE',
        opacity:0.8,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    fontWeight:'bold'
  },
  bias:{
    fontSize: 15,
    fontWeight:'bold',
    position:"absolute",
    right:"10%",
    top:"35%",
    backgroundColor: "#6ABE4E",
    width:70,
    textAlign:"center",
    borderRadius:5
  }
})
