import React from "react";
import { View, Image, Text, StatusBar, TouchableOpacity, TextInput, } from "react-native";
import { Button } from "../../component/buttons";
import { images, COLORS,  icons, } from "../../constants";
import styles from "./styles";
import SelectDropdown from 'react-native-select-dropdown';

const LoginPage = ({navigation}) => {
    const countryCode = ["+91","+93","+61","+43","+1","+56","+57",]

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <Image style={styles.brand} source={images.brand} />
            </View>
            <Text style={styles.title}>Login or Signup</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter Mobile Number</Text>
                <View style={styles.inputs}>
                    <SelectDropdown
                        dropdownStyle={styles.dropDown}
                        buttonStyle={styles.dropDownBtn}
                        data={countryCode}
                        // defaultButtonText={"+91"}
                        defaultValueByIndex={0}
                        buttonTextStyle={styles.dropDownBtnText}
                        rowTextStyle={styles.dropDownText}
                        renderDropdownIcon={()=> 
                            <View style={styles.dropDownIcons}>
                        <Image style={styles.arrowDown} source={icons.ArrowDown} />
                        <Image style={styles.I} source={icons.I} />
                    </View>
                        }
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                    />
                    <TextInput style={styles.textInput} keyboardType="numeric" />
                </View>
            </View>
            <View style={styles.textRow}>
                <Text style={styles.text}>By continuing, I agree to the</Text>
                <TouchableOpacity>
                    <Text style={styles.terms}> Terms of Use </Text>
                </TouchableOpacity>
                <Text style={styles.text}> & </Text>
                <TouchableOpacity>
                    <Text style={styles.terms}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
            <Button text={'Continue'} style={styles.btn} onPress={()=> navigation.navigate('OTPScreen')} />
            <View style={styles.textRow1}>
                <Text style={styles.text}>Having trouble logging in?</Text>
                <TouchableOpacity>
                    <Text style={styles.terms}> Get Help</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default LoginPage;

