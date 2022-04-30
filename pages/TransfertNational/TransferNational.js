import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import * as Contacts from 'expo-contacts'
import { Avatar, Searchbar } from 'react-native-paper'
import { FONTS, SIZES, COLORS } from '../../constants/theme'

const TransferNational = ({navigation}) => {

    const [contact, SetContact] = useState([])
    const [searchQuery, setSearchQuery] = React.useState('');

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers],
            });
            
            if (data.length > 0) {
              SetContact(data)
              console.log(contact)
            }
          }
        })();
    }, []);

    const onChangeSearch = query => setSearchQuery(query);

    function renderDirectory() {
        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{fontWeight:"bold", fontSize:20, marginBottom:10}}>Bénéficiaire</Text>
                <Searchbar
                    placeholder="Entrez un nom ou un numéro"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: 2, width: "90%", alignItems: 'center', margin:10, flexDirection: 'row', padding:6 }}
                onPress={()=> navigation.navigate('TransfertNatMontant')}
            >
                <Avatar.Text size={30} label="XD" />
                <Text style={{color:'black', textAlign:'center', marginLeft:15, fontWeight:"bold", fontSize:18}}>Assia - +225 0709483463</Text>
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
        <View style={{flex:1, padding:10}}>
            {renderDirectory()}
        </View>
    </View>
  )
}

export default TransferNational

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    }
})