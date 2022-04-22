import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'

const DetailsSignals = () => {
    return (
        <View style={{flex:1}}>
            <Header
                centerComponent={{ text: 'SIGNAL GBPUSD', style: { color: '#fff', fontSize:20 } }}
            />
            <View style={styles.container}>
                 <View style={styles.blocStyle}>
                    <Text style={{fontWeight:"bold", color:"white"}}>Placez un breakeven sur les  1.3265</Text>
                    <Text style={styles.textStyle}>12:35 GMT</Text>         
                </View>
                <View style={styles.blocStyle}>
                    <Text style={{fontWeight:"bold", color:"white"}}>TP1 Touché</Text>
                    <Text style={styles.textStyle}>14:35 GMT</Text>              
                </View>
                <View style={styles.blocStyle}>
                    <Text style={{fontWeight:"bold", color:"white"}}>Sortie BE</Text>
                    <Text style={styles.textStyle}>17:35 GMT</Text>             
                </View>
            </View>
        </View>
    )
}

export default DetailsSignals

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        padding:5
    },
    blocStyle:{
        borderWidth:1,
        height:90,
        margin: 5,
        justifyContent: 'center',
        padding:8,
        alignItems:"center",
        backgroundColor:"#4B4E48" ,
        borderRadius:10
    },
    textStyle:{
        fontWeight:"bold", color:"white", fontSize:9, position:"relative", top:"30%",left:"40%"
    }
})
