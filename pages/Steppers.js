import React, { useState }  from 'react'
import { StyleSheet,Alert, Text, View, Image } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const SteppersPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ProgressSteps activeStepIconBorderColor="#1E89E2" completedStepIconColor="#1E89E2">
              <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} nextBtnText="Suivant">
                  <View>
                      <Image
                        source={require(`../assets/images/secure.png`)}
                        style={{width:200, height:200,alignSelf:"center", margin:25, marginBottom:50}}
                      />
                      <Text style={styles.title}>Sécurisé</Text>
                      <Text style={styles.text}>Nous vous offrons des signaux de trading dans toute la sécurité qu'il faut.</Text>
                  </View>
              </ProgressStep>
              <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} previousBtnTextStyle={styles.buttonTextStyle} previousBtnText="Précédent" nextBtnText="Suivant">
                  <View>
                      <Image
                        source={require(`../assets/images/fiable.png`)}
                        style={{width:200, height:200,alignSelf:"center", margin:25, marginBottom:50}}
                      />
                      <Text style={styles.title}>Fiable</Text>
                      <Text style={styles.text}>Nous avons des résultats impressionants que vous découvrirez une fois que vous serez inscrit à notre application.</Text>
                  </View>
              </ProgressStep>
              <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} previousBtnTextStyle={styles.buttonTextStyle} previousBtnText="Précédent" finishBtnText="Terminé" onSubmit={()=> navigation.navigate('Login')}>
                  <View>
                      <Image
                        source={require(`../assets/images/experience.png`)}
                        style={{width:200, height:200,alignSelf:"center", margin:25, marginBottom:50}}
                      />
                      <Text style={styles.title}>Expérience</Text>
                      <Text style={styles.text}>Nous exercons le metier de trader depuis 4 ans maintenant, et donc tous vos soucis en matiere de qualité de trade seront réglés a la seconde.</Text>
                  </View>
              </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default SteppersPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingTop: "8%",
        backgroundColor: "white",
        paddingRight: 8,
    },
    buttonTextStyle:{
      backgroundColor: "#1E89E2",
      borderRadius: 3,
      textAlign:"center",
      width:100,
      height:35,
      padding:3,
      color:"white"
    },
    title:{
      fontSize:25,
      fontWeight:"bold",
      marginLeft: 20,
    },
    text:{
      fontSize:20,
      marginLeft: 20,
      color:"#9A9FA4"
    }

})
