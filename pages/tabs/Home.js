import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { Header } from 'react-native-elements'
import { FONTS, SIZES, COLORS } from '../../constants/theme'
import icons from '../../constants/icons'
import CreditCardUI from "rn-credit-card-ui";

const Home = ({navigation}) => {
    const featuresData = [
        {
            id: 1,
            icon: icons.reload,
            color: "purple",
            backgroundColor: "purple",
            description: "Recharger",
            page: "ServiceRechargement"
        },
        {
            id: 2,
            icon: icons.send,
            color: "black",
            backgroundColor: "black",
            description: "Transfert",
            page:"ChooseTransfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: "green",
            backgroundColor: "green",
            description: "Factures",
            page:"Facture"
        }
    ]

    const specialPromoData = [
        {
            id: 1,
            title: "À Assia Jean",
            montant:-7350,
            date: "4 mars 2022"
        },
        {
            id: 2,
            title: "À David de Paul",
            montant:-6350,
            date: "1 janvier 2021"
        },
        {
            id: 3,
            title: "À Jean Gontran",
            montant:-1350,
            date: "12 avril 2020"
        }
    ]

    const [features, setFeatures] = React.useState(featuresData)

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h4 }}></Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center', margin:10 }}
                onPress={() => navigation.navigate(item.page)}
            >
                <View
                    style={{
                        height: 60,
                        width: 60,
                        marginBottom: 5,
                        borderRadius: 20,
                        borderWidth:1.2,
                        borderColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', width:100, flexWrap: 'wrap', ...FONTS.body4 }}>{item.description}</Text>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        )
    }

    function Historiques(){
        const Header = () => (
            <View
            style={{
                flexDirection: 'row',
                marginBottom: SIZES.padding
            }}
        >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h4 }}>Mes dernières transactions</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("okokok")}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Voir tous</Text>
                </TouchableOpacity>
        </View>
        )
        

        const renderItem = ({ item }) => (
            <View style={{
                flex:1,
                padding:6,
                width:"100%",
                flexDirection: 'row',
            }}>
                <View style={{
                    flex:3,
                    padding:3
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:"bold",
                        color:"#7a7a7a"
                    }}>{item.title}</Text>
                    <Text style={{
                        fontSize:12,
                        color:"#ababab"
                    }}>{item.date}</Text>
                </View>
                <View style={{
                    flex:2,
                    padding:3
                }}>
                    <Text style={{
                        fontSize:13,
                        fontWeight:"bold",
                        color:"#f03737",
                        textAlign:"center"
                    }}>{item.montant} F CFA</Text>
                </View>
            </View>
        )
        return (
            <FlatList
                ListHeaderComponent={Header}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={1}
                data={specialPromoData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    return(
        <View style={styles.container}>
            <View style={{flex:1, width:"100%"}}>
                <View style={{flex:1, marginBottom:15}}>
                    <CreditCardUI 
                        creditCardNumber="4242424242424242"
                        cardCVC="123"
                        cardHolderGender="miss"
                        cardHolderName="Maria James"
                        cardExpiryDate="11/23"
                        frontImg={require('../../assets/images/card-front.png')} // or require("")
                        backImg={require('../../assets/images/card-back.png')}
                        textColor="yellow"
                        secureCardNbr={true}
                    />
                </View>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{color:"gray"}}>Votre solde</Text>
                    <Text style={{fontSize:21, fontWeight:"bold"}}>20 000 FCFA</Text>
                </View>
                <View style={{flex:1, position:"relative", top:"-8%", justifyContent: 'center', alignItems: 'center'}}>
                    {renderFeatures()}
                </View>
                <View style={{flex:1,position:"relative", top:"-10%", height:"100%"}}>
                    {Historiques()}
                </View>
            </View>
        </View>
    )

}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:25,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
    }
})