import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import * as Contacts from 'expo-contacts'
import { Avatar, Searchbar } from 'react-native-paper'
import { FONTS, SIZES, COLORS } from '../../constants/theme'
import { Header, Icon } from 'react-native-elements'

const TransferInternational = ({route, navigation}) => {

    const [contact, SetContact] = useState()
    const [searchQuery, setSearchQuery] = React.useState('');
    const title = route.params.reseauTitle
    const image = route.params.reseauImage

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers],
            });
            
            if (data.length > 0) {
              SetContact(data)
            }
          }
        })();
    }, []);

    const onChangeSearch = query => setSearchQuery(query);

    function renderDirectory() {
        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Searchbar
                    placeholder="Nom ou numéro bénéficiaire"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{borderBottomWidth:1}}
                />
                <View style={{marginTop:5}}>
                    <TouchableOpacity style={{height:58, flexDirection:"row", alignItems:"center"}} onPress={()=> navigation.navigate('AjouterNumero')}>
                        <Icon name='add-circle' color="#1E89E2" size={50} style={{marginRight:15}} />
                        <Text style={{fontSize:18, fontWeight:"400"}}>Envoyer à un nouveau numéro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: 2, width: "90%", alignItems: 'center', margin:10, flexDirection: 'row', }}
                onPress={()=> navigation.navigate('PageAutresTransfert',{
                    userName: item.name,
                    userPhone: item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number,
                    reseauNom: title,
                    reseauImage: image
                })}
            >
                <View style={{width:40, alignItems: 'center', justifyContent: 'center', backgroundColor:"#efefef", borderRadius:20, height:40}}>
                    <Icon name='person' />
                </View>
                <View style={{flexDirection:"column", width:"90%"}}>
                    <Text style={{color:'black', marginLeft:15, fontSize:16}}>{item.name}</Text>
                    <Text style={{marginLeft:15, color:"gray"}}>{item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={contact}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
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
                <Text style={{color:"white",fontSize:19}}>Transferer de l'argent</Text>
            }
      />
        <View style={{flex:1, padding:10}}>
            {renderDirectory()}
        </View>
    </View>
  )
}

export default TransferInternational

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    }
})