import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from '../constants/theme'
import { Header, Icon } from 'react-native-elements';

const Factures = ({navigation}) => {
    const factures = [
        {
            id: 1,
            title: "Canal+",
            page: "PaiementCanal"
        },
        {
            id: 2,
            title:"Startimes",
            page: "PaiementCanal",
        },
        {
            id: 3,
            title: "Pont HKB",
            page:"PaiementCanal"
        },
        {
            id: 4,
            title: "CNPS",
            page:"PaiementCanal"
        }
        ,
        {
            id: 5,
            title: "Eau",
            page:"PaiementCanal"
        },
        {
            id: 6,
            title: "Electricité",
            page:"PaiementCanal"
        }
    ]
    function Historiques(){

        const renderItem = ({ item }) => (
            <TouchableOpacity style={{
                flex:1,
                padding:6,
                width:"100%",
                flexDirection: 'row',
            }} onPress={()=> navigation.navigate(item.page)}>
                <View>
                    <Image source={require('../assets/icon.png')} style={{width:55, height:55}} />
                </View>
                <View style={{
                    flex:3,
                    padding:3
                }}>
                    <Text style={{
                        fontSize:21,
                        fontWeight:"bold",
                        color:"#7a7a7a", position:"relative",top:8, marginLeft:5
                    }}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                numColumns={1}
                data={factures}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        )
    }
  return (
    <View style={styles.container}>
        <Header
        leftComponent={
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Icon size={23} name="arrow-back" color="#fff" />
            </TouchableOpacity>
        }
            centerComponent={
                <Text style={{color:"white",fontSize:19}}>Factures</Text>
            }
        />
        <View style={{flex:1, padding:7}}>
            {Historiques()}
        </View>
    </View>
  )
}

export default Factures

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    }
})