import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button, RadioButton } from 'react-native-paper'

const FormsData = ({navigation}) => {
    const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, marginBottom:"5%", fontWeight:"bold"}}>Enregistrement</Text>
      <TextInput label="Nom complet" placeholder='Assia Jean' style={{width:"95%", margin:5, height:50}} />
      <TextInput label="Email" placeholder='assiajean@test.com' style={{width:"95%", margin:5, height:50}} />
      <View style={{flexDirection:"row", justifyContent:'flex-start', width:"100%", padding:8}}>
        <Text style={{
            position:"relative",top:"2%"
        }}>Homme</Text>
        <RadioButton
        color='blue'
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
        />
        <Text style={{
            position:"relative",top:"2%"
        }}>Femme</Text>
        <RadioButton
        color='blue'
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
        />
      </View>
      <TextInput label="Mot de passe" placeholder='*************' secureTextEntry style={{width:"95%", margin:5, height:50}} />
      <TextInput label="Confirmation du mot de passe" placeholder="*************" secureTextEntry style={{width:"95%", margin:5, height:50}} />
      <Button icon="login" style={styles.boutonLogin} mode="contained"  onPress={() => navigation.navigate('Tabs')}>
            Continuer
        </Button>
    </View>
  )
}

export default FormsData

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    boutonLogin:{
        marginTop:"5%",
            width:150,
            alignSelf:"center",
            marginTop:25,
            marginBottom:30,
            backgroundColor:"#1E89E2"
    }
})