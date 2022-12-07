import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, } from "react-native";
import { COLORS, icons, } from "../../constants";
import styles from "./styles";
const { width, height } = Dimensions.get('window')

const ContactUs = ({ navigation }) => {


    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Contact Us</Text>
            </View>
            <View style={styles.locationContainer}>
                <View style={styles.locationBox}>
                    <Image style={styles.location} source={icons.Location} resizeMode="contain" />
                    <Text style={styles.heading}>Our Address</Text>
                    <Text style={styles.subHeading}>Dombivali (East), Mumbai.</Text>
                </View>
            </View>
            <View style={styles.boxRow}>
                <View style={styles.box}>
                    <Image style={styles.calling} source={icons.Calling} resizeMode="contain" />
                    <Text style={styles.title}>Call Us</Text>
                    <Text style={styles.subHeading}>+91 8693819715 </Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.calling} source={icons.Email} resizeMode="contain" />
                    <Text style={styles.title}>Email US</Text>
                    <Text style={styles.subHeading}>hippikart@gmil.com</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputBox} >
                    <Text style={styles.labels}>Your Name</Text>
                    <TextInput style={styles.input} placeholder="Type Your Name" placeholderTextColor={'#919191'} />
                </View>
                <View style={styles.inputBox} >
                    <Text style={styles.labels}>Your Email</Text>
                    <TextInput style={styles.input} placeholder="Type Your Email" placeholderTextColor={'#919191'} />
                </View>
                <View style={styles.inputBox} >
                    <Text style={styles.labels}>Subject</Text>
                    <TextInput style={styles.input} placeholder="Type Your Subject" placeholderTextColor={'#919191'} />
                </View>
                <View style={styles.inputBox} >
                    <Text style={styles.labels}>Message</Text>
                    <TextInput 
                    multiline={true}
                    numberOfLines={4}
                    style={[styles.input,{ height: height * .2, textAlignVertical: 'top',}]} placeholder="Type Your Message" placeholderTextColor={'#919191'} />
                </View>
            </View>

        </ScrollView>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default ContactUs;