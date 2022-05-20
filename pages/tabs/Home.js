import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView, Animated, BackHandler, Alert } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { FONTS, SIZES, COLORS } from '../../constants/theme'
import icons from '../../constants/icons'
import CreditCardUI from "rn-credit-card-ui"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Moment from 'moment';

const Home = ({navigation, route}) => {

    const [features, setFeatures] = React.useState(featuresData)
    const [userData, setUserData] = React.useState({})
    const [historique, setHistorique] = React.useState([])
    const [accessToken, setAccessToken] = React.useState('')
    const [identifiant, setIdentifiant] = React.useState('')

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
        },
        {
            id: 4,
            title: "À N'Goran Assia",
            montant:-1350,
            date: "12 avril 2020"
        },
        {
            id: 5,
            title: "À Jean Gontran",
            montant:-1350,
            date: "12 avril 2020"
        },
        {
            id: 6,
            title: "À Jean Gontran",
            montant:-1350,
            date: "12 avril 2020"
        },
        {
            id: 7,
            title: "À Assia Jean",
            montant:-7350,
            date: "4 mars 2022"
        },
        {
            id: 8,
            title: "À David de Paul",
            montant:-6350,
            date: "1 janvier 2021"
        },
        {
            id: 9,
            title: "À Jean Gontran",
            montant:-1350,
            date: "12 avril 2020"
        },
        {
            id: 10,
            title: "À N'Goran Assia",
            montant:-1350,
            date: "12 avril 2020"
        },
        {
            id: 11,
            title: "À Jean Gontran",
            montant:-1350,
            date: "12 avril 2020"
        },
        {
            id: 12,
            title: "À Jean Gontran",
            montant:-1350,
            date: "12 avril 2020"
        }
    ]

    
    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text></Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center', margin:10}}
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
                      justifyContent: 'center',
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
                <Text style={{ textAlign: 'center', width:100, flexWrap: 'wrap',}}>{item.description}</Text>
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
            }}
        >
                <View style={{ flex: 1 }}>
                    <Text>Mes dernières transactions</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("okokok")}
                >
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
                        fontSize:16,
                        fontWeight:"bold",
                        color:"#7a7a7a"
                    }}>{item.r_libelle}</Text>
                    <Text style={{
                        fontSize:12,
                        color:"#ababab"
                    }}>{Moment(item.r_date).format('d MMM YYYY')}</Text>
                </View>
                <View style={{
                    flex:2,
                    padding:3
                }}>
                    <Text style={{
                        fontSize:13,
                        color:"#000",
                        textAlign:"center"
                    }}>{item.r_montant} F CFA</Text>
                </View>
            </View>
        )
        return (
            <FlatList
                ListHeaderComponent={Header}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={1}
                data={historique}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    async function getTransactionsList(token){
      const url = "http://18.218.229.67/paychap/c001/listtrsclient"
      const ide = await AsyncStorage.getItem('userId')
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token
        },
        body: JSON.stringify({
          "p_idpaychap":ide,
        })
      }).then((response) => response.json()).then((responseData)=>{
        if(responseData.r_statut == 200){
          setHistorique(responseData.r_contenu)
        }
      })
    }

    async function getUserConnectedInfo(token){
      const url = "http://18.218.229.67/paychap/c001/getbalancewithsecretcode"
      const ide = await AsyncStorage.getItem('userId')
      const pass = await AsyncStorage.getItem('userPassword')

      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          "p_idpaychap":ide, 
          "p_secret":pass
        })
      }).then((response) => response.json()).then((responseData)=>{
        if(responseData.Error == "401"){
          console.log("une erreur s'est produite dans la recupération des informations")
        }else{
          if(responseData.r_statut == 200){
            console.log(responseData.r_contenu)
            setUserData(responseData.r_contenu)
          }
        }
      })
    }

    function getAccessToken(){
      const client_id = 'ITCLT11'
      const client_secret = '$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0'
      
      const baseHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "Basic " + ArrayBuffer.toString(client_id, client_secret)
      };

      const params = "grant_type=client_credentials&client_secret=$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0&client_id=ITCLT11";
      const url = "http://18.218.229.67/paychap/gettoken?grant_type=client_credentials&client_secret=$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0&client_id=ITCLT11"

      return fetch(url,{
        method: "POST",
        body: params,
        headers: baseHeaders
      }).then((response) => response.json()).then((responsetokenJson) => {
        const token = responsetokenJson.access_token
        setAccessToken(token)
      })
    }

    const backAction = () => {
      Alert.alert('Attention !', "Etes vous sûr de vouloir fermer l'application", [
        {
          text: 'Annuler',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Oui', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };


    React.useEffect(()=>{
      
      const client_id = 'ITCLT11'
      const client_secret = '$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0'
      
      const baseHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "Basic " + ArrayBuffer.toString(client_id, client_secret)
      };

      const params = "grant_type=client_credentials&client_secret=$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0&client_id=ITCLT11";
      const url = "http://18.218.229.67/paychap/gettoken?grant_type=client_credentials&client_secret=$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0&client_id=ITCLT11"

      return fetch(url,{
        method: "POST",
        body: params,
        headers: baseHeaders
      }).then((response) => response.json()).then((responsetokenJson) => {
        console.log(responsetokenJson)
        const token = responsetokenJson.access_token
        setAccessToken(token)
        getTransactionsList(token)
        getUserConnectedInfo(token)
      })
    },[])

    let AnimatedHeaderValue = new Animated.Value(0);
    const Header_Max_Height = 100;
    const Header_Min_Height = 80;

    const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['white', 'white'],
    extrapolate: 'clamp'
    });

    const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
    })

    return(
        <SafeAreaView>
            <Animated.View 
                style={[
                    styles.header,
                    {
                    height: animateHeaderHeight,
                    backgroundColor: animateHeaderBackgroundColor
                    }
                ]}
            >
                <Text style={{fontSize:21, fontWeight:"bold"}}> {userData.r_solde_indic} {userData.r_devise}</Text>
            </Animated.View>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
                    {useNativeDriver: false}
                )}
            >
                <View>
                    <CreditCardUI 
                        creditCardNumber="4242424242424242"
                        cardCVC="123"
                        cardHolderGender="MR"
                        cardHolderName="THOMAS EDISON"
                        cardExpiryDate="11/23"
                        frontImg={require('../../assets/images/card-front.png')} // or require("")
                        backImg={require('../../assets/images/card-back.png')}
                        textColor="yellow"
                        secureCardNbr={true}
                    />
                    <View style={{alignItems: 'center', justifyContent: "flex-end", position:"relative", top:"-10%", borderWidth:2, borderColor:"red"}}>
                        {renderFeatures()}
                    </View>
                </View>
                <View style={{position:"relative", top:-15}}>
                    {Historiques()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        justifyContent:"center",
        alignItems:"center",
        left:0,
        right:0,
        top:12
      },
      headerText:{
        color:"#fff",
        fontSize:18,
        textAlign:"center",
      },
      headerTextMin:{
        color:"#fff",
        fontSize:16,
        textAlign:"center",
      }
})