import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from '../../constants/theme'
import { Header, Icon } from 'react-native-elements';

const ServiceRechargement = ({navigation}) => {
    const services = [
        {
            id: 1,
            title: "Orange Money",
            page: "PageRecharge"
        },
        {
            id: 2,
            title: "Flooz",
            page: "PageRecharge"
        },
        {
            id: 3,
            title: "MTN Mobile Money",
            page: "PageRecharge"
        },
        {
            id: 4,
            title:"UBA",
            page: "PageRecharge",
        },
        {
            id: 5,
            title: "Djamo",
            page:"PageRecharge"
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
                    <Image source={require('../../assets/icon.png')} style={{width:55, height:55}} />
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
                data={services}
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
                <Text style={{color:"white", fontSize:19}}>Recharger mon compte</Text>
            }
        />
        <View style={{flex:1, padding:7}}>
            {Historiques()}
        </View>
    </View>
  )
}

export default ServiceRechargement

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    }
})