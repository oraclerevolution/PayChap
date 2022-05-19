import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'

const HistoriquesTradesPage = () => {
    return (
        <View style={{flex:1}}>
                <Header
                    centerComponent={{ text: 'HISTORIQUES', style: { color: '#fff', fontSize:19 } }}
                />
                <View style={styles.container}>
                    <Text>Page des historiques</Text>
                </View>
        </View>
    )
}

export default HistoriquesTradesPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
