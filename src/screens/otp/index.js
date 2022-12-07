import React from "react";
import { View, Image, Text, StatusBar, TouchableOpacity, TextInput, } from "react-native";
import { Button } from "../../component/buttons";
import { images, COLORS, FONTS, icons, } from "../../constants";
import styles from "./styles";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpPage = ({navigation}) => {

    return (
    //   <KeyboardAwareScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <Image style={styles.brand} source={images.brand} />
            </View>
            <Text style={styles.title}>Enter 6 digit OTP</Text>
                <Text style={styles.label}>We just send you a verify code. Check your inbox to get them.</Text>
            <View style={styles.OtpRow}>
                <OTPInputView onPress={() => console.log("press me")}
                    style={styles.OtpinputBox}
                    pinCount={6}
                    // autoFocusOnLoad
                    codeInputFieldStyle={styles.boxstyle}
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />
            </View>
            <View style={styles.textRow}>
                <Text style={styles.text}>Didn’t get a OTP?</Text>
                <TouchableOpacity>
                    <Text style={styles.resendOtp}> Resend OTP</Text>
                </TouchableOpacity>
            </View>
            <Button text={'Done'} style={styles.btn} onPress={()=> navigation.navigate('Drawer')} />
        </View>
    //   </KeyboardAwareScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default OtpPage;

