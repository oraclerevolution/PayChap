import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
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

const Item = ({ paire, biais, entry, stop }) => {
    return(
        <View style={styles.item}>
            <Text style={styles.title}> Paire: {paire}</Text>
            <Text style={styles.bias}>{biais}</Text>
            <Text style={styles.title}> Point d'entré: {entry}</Text>
            <Text style={styles.title}> Stop loss: {stop}</Text>
        </View>
    )
   
}

const SignalPage = () => {
    const renderItem = ({ item }) => (
        <Item paire={item.paire} biais={item.biais} entry={item.entry} stop={item.stop} />
    );
    return (
        <View style={{flex:1}}>
                <Header
                    centerComponent={{ text: 'SIGNAUX GRATUITS', style: { color: '#fff', fontSize:20 } }}
                />
                <View style={styles.container}>
                     <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
        </View>
    )
}

export default SignalPage

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item: {
        backgroundColor: '#6ABE4E',
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
    backgroundColor: "orange",
    width:50,
    textAlign:"center",
    borderRadius:5
  }
})
