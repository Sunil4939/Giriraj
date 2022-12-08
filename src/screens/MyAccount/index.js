import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";

const MyAccount = ({ navigation }) => {
    const [singleFile, setSingleFile] = useState(images.yourProfile);

    const selectFile = async () => {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
        setSingleFile(res);
    };
 

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>My Account</Text>
                </View>
                <View style={styles.profileBox}>
                    <View>
                        <Image source={singleFile} style={styles.userProfile} resizeMode='contain' />
                        <TouchableOpacity onPress={selectFile}>
                            <Image source={icons.Edit} style={styles.Edit} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>Andrew Forbes</Text>
                    <Text style={styles.text}>+91 9632587410</Text>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.BtnRow} onPress={() => navigation.navigate('SetAccount')} >
                        <View style={styles.row}>
                            <Image source={icons.Profile} style={styles.profileIcon} resizeMode="contain" />
                            <Text style={styles.text}>Edit Profile</Text>
                        </View>
                        <Text style={styles.arrow}>&#62;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BtnRow} onPress={() => navigation.navigate('CouponScreen')} >
                        <View style={styles.row}>
                            <Image source={icons.Chart}  style={styles.profileIcon} resizeMode="contain" />
                            <Text style={styles.text}>My Coupons</Text>
                        </View>
                        <Text style={styles.arrow}>&#62;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BtnRow} onPress={() => navigation.navigate('Help FAQ')} >
                        <View style={styles.row}>
                            <Image source={icons.Info} style={styles.profileIcon} resizeMode="contain" />
                            <Text style={styles.text}>Help & FAQ</Text>
                        </View>
                        <Text style={styles.arrow}>&#62;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BtnRow} onPress={() => navigation.navigate('About Us')} >
                        <View style={styles.row}>
                            <Image source={icons.Lock}  style={styles.profileIcon} resizeMode="contain" />
                            <Text style={styles.text}>About Us</Text>
                        </View>
                        <Text style={styles.arrow}>&#62;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.BtnRow, {justifyContent:'center'}]} >
                        <View style={styles.row}>
                            <Image source={icons.Logout} style={styles.profileIcon} resizeMode="contain" />
                            <Text style={[styles.text, { color: COLORS.blue }]}>Logout</Text>
                        </View>
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

export default MyAccount;