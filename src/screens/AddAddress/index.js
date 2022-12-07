import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
import styles from "./styles";
const { width, height } = Dimensions.get('window')

const AddAddress = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Checkout</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.topText}>For faster checkout, </Text>
                    <TouchableOpacity>
                    <Text style={[styles.topText, {color:COLORS.blue}]}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Contact Details</Text>
                    <TextInput style={styles.input} placeholder="Name*" placeholderTextColor={'#A7A7A7'} />
                    <TextInput style={styles.input} placeholder="Mobile Number*" placeholderTextColor={'#A7A7A7'} keyboardType="numeric" />
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder="Pin Code*" placeholderTextColor={'#A7A7A7'} keyboardType="numeric" />
                    <TextInput style={styles.input} placeholder="Address*" placeholderTextColor={'#A7A7A7'} />
                    <TextInput style={styles.input} placeholder="Locality*" placeholderTextColor={'#A7A7A7'} />
                    <View style={styles.inputRow}>
                        <TextInput style={[styles.input, { width: width * .42, }]} placeholder="City*" placeholderTextColor={'#A7A7A7'} />
                        <TextInput style={[styles.input, { width: width * .42, }]} placeholder="State*" placeholderTextColor={'#A7A7A7'} />
                    </View>
                    <View style={styles.BtnRow}>
                        <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.black, borderWidth: 0,}]}>
                            <Text style={[styles.btnTxt, { color: COLORS.white, }]}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnTxt}>Office</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BtnRow}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        tintColors={{ true: 'black', false: 'black' }}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        style={styles.checkBox}
                    />
                    <Text style={styles.text}> Make this as my default address</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.addBtn} onPress={()=>navigation.navigate('NewAddressScreen')}>
                            <Text style={styles.addBtnText}>Add Address</Text>
                        </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default AddAddress;