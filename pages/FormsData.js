import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import { TextInput, Button, RadioButton } from 'react-native-paper'
import { Header, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OTPTextInput from "react-native-otp-textinput"

const FormsData = ({navigation}) => {
    const [checked, setChecked] = React.useState('first');
    let otpInput = React.useRef(null);

    useEffect(()=>{
        //console.log("screen width " + dimensionsWidth);
    },[])

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
        <Text style={{fontSize:21, fontWeight:"bold", paddingLeft:8 , marginBottom:"5%", textAlign:"left", color:"#1E89E2"}}>Enregistrement</Text>
        <View style={{justifyContent: "center", alignItems: 'center',}}>
            <TextInput label="Nom complet" placeholder='Assia Jean' style={{width:"95%", margin:5, height:50, backgroundColor:"#fff"}} />
            <TextInput label="Email" placeholder='assiajean@test.com' style={{width:"95%", margin:5, height:50, backgroundColor:"#fff"}} />
            <View style={{flexDirection:"row", justifyContent:'flex-start', width:"100%", padding:8}}>
                <Text style={{
                    position:"relative",top:"2%"
                }}>Homme</Text>
                <View style={{position:'relative', left:"20%"}}>
                    <RadioButton
                    color='blue'
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                </View>
                <Text style={{
                    position:"relative",top:"2%", right:"-455%"
                }}>Femme</Text>
                <View style={{position:'relative', right:"-470%"}}>
                    <RadioButton
                    color='blue'
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
                </View>
            </View>
            <Text style={styles.text}>Veuillez défnir votre code secret</Text>
            <OTPTextInput ref={e => (otpInput = e)} />
            <OTPTextInput ref={e => (otpInput = e)} />
            <Button style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('FileUploadInscription')}>
                    Continuer
                </Button>

        </View>
        </View>
    </View>
  )
}

export default FormsData

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        padding:8,
        paddingTop:20
        
    },
    boutonLogin:{
            marginTop:"5%",
            width:150,
            alignSelf:"center",
            marginTop:25,
            marginBottom:30,
            backgroundColor:"#1E89E2",
            borderRadius:18
    },
    text: {
        marginTop:10,
        fontSize:18
    },
})