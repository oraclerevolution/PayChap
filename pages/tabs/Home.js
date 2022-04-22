import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'

const Home = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                <View style={{width:"100%", height:250,flexDirection: 'column',}}>
                    <View
                        style={{
                            flex:1,
                            alignItems:'center',
                            backgroundColor:"#e1f7ff",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderBottomLeftRadius:18,
                            borderBottomRightRadius:18
                    }}
                    >
                        {/* Balance */}
                        <View
                            style={{
                                alignItems:"center",
                                justifyContent:"center",
                                padding:15,
                                flex:1
                            }}
                        >
                           <Text style={{marginTop:"20%", color:"black", fontSize:27, fontWeight:"bold"}}>12 000 FCFA</Text>
                        </View>
                        <View style={{flex:1, flexDirection:"row", padding:13, justifyContent: 'center', alignItems: 'center',}}>
                        <TouchableOpacity onPress={()=>console.log("okok")} style={{flex:1}}>
                            <Image
                                source={require('../../assets/icons/transaction.png')}
                                style={{
                                    height:30,
                                    width:30,
                                    alignSelf:"center"
                                }}
                            />
                            <Text style={{textAlign:"center", marginTop:10, fontWeight:"bold", fontSize:13}}>Recharger</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>console.log("okok")} style={{flex:1}}>
                            <Image
                                source={require('../../assets/icons/send.png')}
                                style={{
                                    height:30,
                                    width:30,
                                    alignSelf:"center"
                                }}
                            />
                            <Text style={{textAlign:"center", marginTop:10, fontWeight:"bold", fontSize:13}}>Envoyer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>console.log("okok")} style={{flex:1}}>
                            <Image
                                source={require('../../assets/icons/withdraw.png')}
                                style={{
                                    height:30,
                                    width:30,
                                    alignSelf:"center"
                                }}
                            />
                            <Text style={{textAlign:"center", marginTop:10, fontWeight:"bold", fontSize:13}}>Retirer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>console.log("okok")} style={{flex:1}}>
                            <Image
                                source={require('../../assets/icons/historiques.png')}
                                style={{
                                    height:30,
                                    width:30,
                                    alignSelf:"center"
                                }}
                            />
                            <Text style={{textAlign:"center", marginTop:10, fontWeight:"bold", fontSize:13}}>Historiques</Text>
                        </TouchableOpacity>
                        
                        </View>
                    </View>
                </View>
                <View style={{
                flex:1,
                padding:12,
                backgroundColor:"#f1f1f1"
            }}>
                <View style={{borderWidth:1, width:"30%", alignSelf: 'center', height:6, borderColor:"lightgray", backgroundColor:"lightgray", borderRadius:22}}></View>
                <Text style={{
                    fontSize:19,
                    color: "#979797",
                    marginTop:"2%"
                }}>Historiques des transactions</Text>
            </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    }
})
