import { StyleSheet, Text, View, Button } from 'react-native'
import React,{useState, useEffect} from 'react'
import OTPInput from 'react-native-otp'

const ScreenOTP = ({navigation}) => {
    const [otp, setOtp] = useState('')
    const [s, setS] = useState(true);
    const [fourDigit, setFourDigit] = useState(false);
    const handleOTPChange = (otp) => {
        setOtp(otp)
    }
    const clearOTP = () => {
        //setOtp(undefined)
        navigation.navigate('Forms')
    }
    const autoFill = () => {
        setOtp("221198")
    }

    const toggle = () => {
        setFourDigit((fourDigit) => !fourDigit);
      };

      const handleChange = (code) => {
        console.log('currentCodeReturned', code, s);
        setS((s) => !s);
      };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter OTP password</Text>

            <OTPInput
                value={otp}
                onChange={handleChange}
                tintColor="#FB6C6A"
                offTintColor="#BBBCBE"
                keyboardType="phone-pad"
                otpLength={4}
            />

            <Button onPress={()=> clearOTP()} title="clear" />
            <Button onPress={()=> autoFill()} title="Auto fill" />
        </View>
    )
}

export default ScreenOTP

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 15
    }
})