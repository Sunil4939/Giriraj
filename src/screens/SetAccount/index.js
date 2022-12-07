import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions } from "react-native";
import { COLORS,  icons, images, } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";
const { width, height } = Dimensions.get('window')

const SetAccountDetails = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [singleFile, setSingleFile] = useState(images.userProfile);

    const selectFile = async () => {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
        setSingleFile(res);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Edit Profile</Text>
                </View>
                <View style={styles.profileBox}>
                    <View>
                    <Image source={singleFile} style={styles.userProfile} resizeMode='contain' />
                   <TouchableOpacity  onPress={selectFile}>
                   <Image source={icons.Edit} style={styles.Edit} resizeMode='contain' />
                   </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Contact Details</Text>
                    <TextInput style={styles.input} placeholder="Name*" value="Rushi More" placeholderTextColor={'#A7A7A7'} />
                    <TextInput style={styles.input} placeholder="Mobile Number*" value="9698521470" placeholderTextColor={'#A7A7A7'} keyboardType="numeric" />
                    <Text style={styles.label}>Date of Birth</Text>
                    <TextInput style={styles.input} placeholder="Name*" value="26 / 12 / 1990" placeholderTextColor={'#A7A7A7'} />
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder="Pin Code*" value="462024" placeholderTextColor={'#A7A7A7'} keyboardType="numeric" />
                    <TextInput style={styles.input} placeholder="Address*" value="Amar road beside local market" placeholderTextColor={'#A7A7A7'} />
                    <TextInput style={styles.input} placeholder="Locality*" value="Mall Road" placeholderTextColor={'#A7A7A7'} />
                    <View style={styles.inputRow}>
                        <TextInput style={[styles.input, { width: width * .42, }]} placeholder="City*" value="Bhopal" placeholderTextColor={'#A7A7A7'} />
                        <TextInput style={[styles.input, { width: width * .42, }]} placeholder="State*" value="Madhya Pradesh" placeholderTextColor={'#A7A7A7'} />
                    </View>
                    <View style={styles.BtnRow}>
                        <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.black, borderWidth: 0,  }]}>
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
                    <TouchableOpacity style={styles.addBtn}>
                            <Text style={styles.addBtnText}>Done</Text>
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

export default SetAccountDetails;