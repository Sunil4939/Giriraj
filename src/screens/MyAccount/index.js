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

    const checkScreen = (title) => {

        switch (title) {
            case 'Edit Profile':
                return 'SetAccount';
            case 'My Coupons':
                return 'CouponScreen';
           
            case 'Help & FAQ':
                return 'Help FAQ';
            case 'About Us':
                return 'About Us';
            // case 'Logout':
            //     return 'ContactScreen';
            default:
                return 'AccountDetails';
        }

    }

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
                    {dummyData.AccountData.map((item) =>
                        <TouchableOpacity style={[styles.BtnRow, item.title == 'Logout' && { justifyContent: 'center' }]} onPress={() => navigation.navigate(checkScreen(item.title))} >
                            <View style={styles.row}>
                                <Image source={item.icon} style={[styles.profileIcon,{tintColor: COLORS.blue}]} resizeMode="contain" />
                                <Text style={[styles.text, item.title == 'Logout' && { color: COLORS.blue }]}>{item.title}</Text>
                            </View>
                            {item.title != 'Logout' && (
                                <Text style={styles.arrow}>&#62;</Text>
                            )}
                        </TouchableOpacity>
                    )}
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