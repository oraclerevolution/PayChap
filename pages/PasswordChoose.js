import React, {useState} from 'react'
import { Text, StyleSheet, View,StatusBar, SafeAreaView, Image,TouchableOpacity} from 'react-native'

const PasswordChoose = ({navigation}) => {
    const [passcode, setPasscode] = useState(['','','','']);
    let numbers = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:0}]

    function onPressNumber(num) {
        let tempCode = passcode;
        for(let i = 0; i < tempCode.length; i++) {
            if(tempCode[i] === '') {
                tempCode[i] = num;
                break;
            }else{
                continue;
            } 
        }
        setPasscode(tempCode)
    }

    function checkPasscode(){
        console.log(passcode)
    }

    function onPressCancel(){
        let tempCode = passcode
        for(let i = tempCode.length - 1; i >= 0; i--) {
            if(tempCode[i] !== '') {
                tempCode[i] = '';
                break;
            }else{
                continue;
            } 
        }
        setPasscode(tempCode)
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.swipe}>
                <View>
                    <Image source={require('../assets/icon.png')} style={{width:80, height:80, position:'relative', top:"50%"}} />
                </View>
                <View style={{marginTop:75}}>
                    <View>
                        <Text style={styles.passcodeText}>Entrez un mot de passe</Text>
                    </View>
                    <View style={styles.codeContainer}>
                        {
                            passcode.map((p, index)=>{
                                let style = p != ''?styles.code2: styles.code;
                                return <View style={style} key={index}></View>
                            })
                        }
                    </View>
                </View>
            </View>
            <View style={{alignItems:"center", justifyContent:'center'}}>
                <View style={styles.numbersContainer}>
                    {numbers.map(num=>{
                        return (
                            <TouchableOpacity style={styles.number} key={num.id} onPress={()=> onPressNumber(num.id)}>
                                <Text style={styles.numberText}>{num.id}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={()=> onPressCancel()}>
                    <Text style={styles.buttonText}>Effacer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Tabs')}>
                    <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swipe:{
        height:173,
        alignItems:"center",
        justifyContent:'center'
    },
    swipeUPtext:{
        fontSize:17,
        color:"#000",
        letterSpacing:-0.41,
        lineHeight:22
    },
    passcodeText:{
        fontSize:17,
        color:"#000",
        letterSpacing:0.34,
        lineHeight:25
    },
    codeContainer:{
        marginTop:12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    code:{
        width:13,
        height:13,
        borderRadius:13,
        borderWidth:1,
        borderColor:"#000"
    },
    code2:{
        width:13,
        height:13,
        borderRadius:13,
        backgroundColor:"#000"
    },
    number:{
        width:75,
        height:75,
        borderRadius:75,
        margin:8,
        backgroundColor:"rgba(0,0,0,0.1)",
        justifyContent:'center',
        alignItems:'center'
    },
    numbersContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:58,
        width:282,
        height:348,
        alignItems:'center',
        justifyContent: 'center',
    },
    numberText:{
        fontSize:36,
        color:"#000",
        letterSpacing:0,
        textAlign:'center'
    },
    buttons:{
        marginTop:73,
        marginLeft:46,
        marginRight:46,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    buttonText:{
        fontSize:16,
        color:"#000",
        letterSpacing:-0.39,
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default PasswordChoose