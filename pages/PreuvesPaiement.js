import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Platform,Button as Btn } from 'react-native'
import { Header } from 'react-native-elements'
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { Dialog } from 'react-native-simple-dialogs';

const PreuvesPaiement = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [isVisible, onChangeVisible ] = useState(false);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{flex:1}}>
             <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'PREUVE DE PAIEMENT', style: { color: '#fff', fontSize:19 } }}
            />
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{textAlign:"center", fontSize:22, fontWeight:"bold", color:"#000", marginBottom:20}}>Chargez la preuve du paiement</Text>
                <Btn title="Chargez la preuve de paiement" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 300, height: 220, marginTop:20 }} />}
                </View>

            <Button icon="login" style={styles.button} mode="contained"  onPress={() => onChangeVisible(true)}>
                Envoyez
            </Button>

             <Dialog
                visible={isVisible}
                onTouchOutside={() => onChangeVisible(false)}
            >
                <View>
                    <Text style={{textAlign:"center", fontSize:22, fontWeight:"bold", color:"#1E89E2"}}>Merci !</Text>
                    <Text style={{textAlign:"center", fontSize:14, borderBottomWidth: 1,paddingBottom:20}}>Nous avons reçu votre preuve, laissez nous vérifier.</Text>

                    <Image
                        source={require('../assets/images/success.png')}
                        style={styles.image}
                    />
                    <Text style={{fontSize:16, textAlign:"center", marginTop:"10%"}}>Vous venez de vous abonnez à notre service de signaux forex. Nous vous enverrons par mail vos accès à la plateforme. </Text>
                    <Button style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('Login')}>
                        Continuer
                    </Button>
                </View>
            </Dialog>
            </View>

        </View>
    )
}

export default PreuvesPaiement

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    button:{
        width:250,
        alignSelf:'center',
        backgroundColor: "#1E89E2",
        margin:15
    },
    boutonLogin:{
        width:150,
        alignSelf:"center",
        marginTop:25,
        marginBottom:30,
        backgroundColor:"#1E89E2"
    },
    image:{
        width:200,
        height:150,
        alignSelf: 'center',
    },
})
