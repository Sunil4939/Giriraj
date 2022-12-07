import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, ImageBackground } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import styles from "./styles";
const { width, height } = Dimensions.get('window')

const AddressBox = () => {
    return(
        <View style={styles.addressBox}>
        <View style={styles.row}>
            <Text style={styles.text}>Rushi More</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.btnTxt, { color: COLORS.white }]}>Home</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <TouchableOpacity >
                    <Text style={styles.btnTxt}>Edit</Text>
                </TouchableOpacity>
                <Text style={styles.btnTxt}> | </Text>
                <TouchableOpacity>
                    <Text style={styles.btnTxt}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={styles.text}>9698521470</Text>
        <View style={{marginVertical: height * .02,}}>
            <Text style={styles.text}>Amar road beside local market</Text>
            <Text style={styles.text}>Mall Road, 462024</Text>
            <Text style={styles.text}>Bhopal, Madhya Pradesh</Text>
        </View>
    </View>
    )
}

const NewAddress = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Checkout</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Address</Text>

                    <AddressBox />

                    <TouchableOpacity style={[styles.addBtn, styles.centerBtn]} onPress={()=>navigation.navigate('CategoryScreen')}  >
                        <Text style={styles.addBtnText}>+ Add New Address</Text>
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

export default NewAddress;