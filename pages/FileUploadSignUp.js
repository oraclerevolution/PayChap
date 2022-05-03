import { StyleSheet, Text, View, TouchableOpacity, Platform, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Header, Icon } from 'react-native-elements'
import  * as ImagePicker from 'expo-image-picker'
import * as Constants from 'expo-constants'
import { Button } from 'react-native-paper'

const FileUploadSignUp = ({navigation}) => {
    const [recto, setRecto] = useState(null)
    const [verso, setVerso] = useState(null)

    useEffect(()=>{
        if(Platform.OS !== 'web'){
            const {status} = ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== "granted") {
                console.log('Permission denied')
            }
        }
    },[])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        console.log(result);
        if(!result.cancelled){
            setRecto(result.uri)
        }
    }

    const PickVerso = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        console.log(result);
        if(!result.cancelled){
            setVerso(result.uri)
        }
    }

  return (
    <View style={{flex:1}}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon size={23} name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
        />
        <View style={styles.container}>
            <Text style={{fontSize:18, color:"black", marginBottom:10}}>Chargez votre pièce d'identité</Text>
            <TouchableOpacity onPress={PickImage} style={{backgroundColor:"#efefef", borderRadius:5, borderWidth:1, width:300, height:200, justifyContent:"center", alignItems: 'center', margin:10}}>
                <Text>Recto</Text>
                {recto && <Image source={{uri:recto}} style={{
                    width:300, height:200
                }} />}
            </TouchableOpacity>
            
            <TouchableOpacity onPress={PickVerso} style={{backgroundColor:"#efefef", borderRadius:5,borderWidth:1, width:300, height:200, justifyContent:"center", alignItems: 'center', margin:10}}>
                <Text>Verso</Text>
                {verso && <Image source={{uri:verso}} style={{
                    width:300, height:200
                }} />}
            </TouchableOpacity>
            <View style={{marginTop:20}}>
                <Button mode="contained" style={{marginBottom:2, borderRadius:18, backgroundColor:"#1E89E2"}} onPress={()=> navigation.navigate('Tabs')}>Passer cette étape</Button>
                <Button mode="contained" style={{marginBottom:2, borderRadius:18, backgroundColor:"#1E89E2"}} onPress={()=> navigation.navigate('Tabs')}>Suivant</Button>
            </View>
        </View>
    </View>
  )
}

export default FileUploadSignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent: 'center',
    }
})