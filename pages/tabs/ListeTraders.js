import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Header } from 'react-native-elements'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Button } from 'react-native-paper';

const markers = [
    {
        latitude: 37.78825,
        longitude: -122.4324,
        title: "Assia"
    },
]
const ListesTraders = ({navigation}) => {
    
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            </View>
        </View>
    )
}

export default ListesTraders

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        width:250,
        alignSelf:'center',
        backgroundColor: "#1E89E2",
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
})
